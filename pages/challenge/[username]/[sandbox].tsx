import { CodeBlocks } from "@prisma/client";
import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { Timer } from "@src/components/challenges/timer";
import { Editor } from "@src/components/sandbox/editor";
import { YStack } from "@src/components/stack";
import { getCodeBlocks } from "@src/controllers/databaseController";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const SandBox = ({ codeBlocks }: { codeBlocks: CodeBlocks | null }) => {
  const submitButton = (
    <Button type={"blue900"} css={{ width: "$space$134" }}>
      Submit Test
    </Button>
  );

  return (
    <YStack>
      <ChallengesNav
        navTitle="Code Cube"
        showCountdown={<Timer />}
        actionButton={submitButton}
        showBackButton={true}
        showDate={true}
      />
      {codeBlocks ? (
        <Editor
          codeBlocks={{
            ...codeBlocks,
            id: codeBlocks.id.toString(),
            challengeId: codeBlocks.challengeId.toString(),
          }}
        />
      ) : (
        <Editor />
      )}
    </YStack>
  );
};

export default SandBox;

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  const { username, sandbox } = context.query;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const codeBlocks = await getCodeBlocks(username as string, Number(sandbox));

  return { props: { codeBlocks } };
};
