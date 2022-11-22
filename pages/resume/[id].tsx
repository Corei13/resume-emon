import { YStack, XStack } from "@src/components/stack";
import { TopNav } from "@src/components/topnav";
import { CanvasNav } from "@src/components/canvas/canvasNav";
import { LeftBar } from "@src/components/leftbar/leftbar";
import { RightBar } from "@src/components/rightbar/rightbar";
import { NextPageContext } from "next";
import { Resume } from "@src/types";
import Head from "next/head";
import { Atom } from "jotai";
import {
  profileAtom,
  experiencesAtom,
  educationsAtom,
  projectsAtom,
  skillSectionAtom,
} from "@src/atoms/resume";
import { useHydrateAtoms } from "jotai/utils";
import { usernameAtom } from "@src/atoms/username";
import { DefaultData } from "@src/utils/defaults";
import { MainView } from "@src/components/mainView";
import { getSession } from "next-auth/react";
import { getResume } from "@src/controllers/databaseController";

export default function ResumePage({ resume }: { resume: Resume | null }) {
  let username = "";
  if (typeof window !== "undefined") {
    username = localStorage.getItem("userName") || "";
  }
  useHydrateAtoms([
    [usernameAtom, username],
    [profileAtom, resume?.profile || DefaultData.profile],
    [
      experiencesAtom,
      resume?.experiences || [DefaultData.experience(username)],
    ],
    [educationsAtom, resume?.educations || [DefaultData.education(username)]],
    [projectsAtom, resume?.projects || [DefaultData.project(username)]],
    [skillSectionAtom, resume?.skills || [DefaultData.skillSection(username)]],
  ] as unknown as Iterable<readonly [Atom<unknown>, unknown]>);

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
