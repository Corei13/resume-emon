import { YStack, XStack } from "@src/components/stack";
import { TopNav } from "@src/components/topnav";
import { CanvasNav } from "@src/components/canvas/canvasNav";
import { LeftBar } from "@src/components/leftbar/leftbar";
import { RightBar } from "@src/components/rightbar/rightbar";
import { NextPageContext } from "next";
import { Resume } from "@src/types";
import Head from "next/head";
import { Atom, useSetAtom } from "jotai";
import {
  profileAtom,
  experiencesAtom,
  educationsAtom,
  projectsAtom,
  skillSectionAtom,
} from "@src/atoms/resume";
import { useHydrateAtoms } from "jotai/utils";
import { usernameAtom } from "@src/atoms/username";
import { MainView } from "@src/components/mainView";
import { getSession } from "next-auth/react";
import { getResume } from "@src/controllers/databaseController";
import { titleAtom } from "@src/atoms/title";
import { createdAtAtom } from "@src/atoms/createdAt";
import { useEffect } from "react";

export default function ResumePage({ resume, id }: { resume: Resume | null, id: string }) {

  let username = "";
  if (typeof window !== "undefined") {
    username = localStorage.getItem("userName") || "";
  }
  const setUserName = useSetAtom(usernameAtom)
  const setTitleAtom = useSetAtom(titleAtom)
  const educationsDispatcher = useSetAtom(educationsAtom)
  const profileDispatcher = useSetAtom(profileAtom)
  const experienceDispatcher = useSetAtom(experiencesAtom)
  const projectsDispatcher = useSetAtom(projectsAtom)
  const skillDispatcher = useSetAtom(skillSectionAtom)

  useHydrateAtoms([
    [usernameAtom, username],
    [titleAtom, resume?.title],
    [createdAtAtom, resume?.createdAt],
    [profileAtom, resume?.profile],
    [
      experiencesAtom,
      resume?.experiences ,
    ],
    [educationsAtom, resume?.educations ],
    [projectsAtom, resume?.projects],
    [skillSectionAtom, resume?.skills],
  ] as unknown as Iterable<readonly [Atom<unknown>, unknown]>);

  useEffect(()=>{
    setUserName(username)
    setTitleAtom(resume?.title!)

    educationsDispatcher({
      type: "set",
      value: resume?.educations
    })
    profileDispatcher({
      type: "set",
      value: resume?.profile
    })
    experienceDispatcher({
      type: "set",
      value: resume?.experiences
    })
    projectsDispatcher({
      type: "set",
      value: resume?.projects
    })
    skillDispatcher({
      type: "set",
      value: resume?.skills
    })

    return () => {}

  }, [id])


  return (
    <>
      <Head>
        <title>Re:sume</title>
      </Head>
      <YStack
        css={{
          height: "100vh",
          overflow: "hidden",
          fontSize: "$sm",
        }}
      >
        <TopNav />
        <XStack css={{ flexGrow: 1, overflow: "hidden" }}>
          <LeftBar />
          <YStack css={{ flexGrow: 4, overflow: "hidden", width: "64%" }}>
            <CanvasNav />
            <MainView />
          </YStack>
          <RightBar />
        </XStack>
      </YStack>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;
  const resume = await getResume(id as string);

  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return { props: { resume, id } };
}
