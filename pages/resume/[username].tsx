import { YStack, XStack } from "@src/components/stack";
import { TopNav } from "@src/components/topnav";
import { CanvasNav } from "@src/components/canvas/canvasNav";
import { LeftBar } from "@src/components/leftbar/leftbar";
import { RightBar } from "@src/components/rightbar/rightbar";
import { NextPageContext } from "next";
import { Resume } from "@src/types";
import databaseController from "@src/controllers/databaseController";
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

export default function ResumePage({
  resume,
  username,
}: {
  resume: Resume | null;
  username: string;
}) {
  useHydrateAtoms([
    [usernameAtom, username],
    [profileAtom, resume?.profile || DefaultData.profile],
    [experiencesAtom, resume?.experiences || [DefaultData.experience]],
    [educationsAtom, resume?.educations || [DefaultData.education]],
    [projectsAtom, resume?.projects || [DefaultData.project]],
    [skillSectionAtom, resume?.skills || [DefaultData.skillSection]],
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
  const { username } = context.query;
  const resume = await databaseController.getResume(username as string);

  return { props: { resume, username } };
}
