import { CodeBlocks } from "@prisma/client";
import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { Timer } from "@src/components/challenges/timer";
import { Editor } from "@src/components/sandbox/editor";
import { YStack } from "@src/components/stack";
import databaseController from "@src/controllers/databaseController";

const SandBox = ({ codeBlocks }: { codeBlocks: CodeBlocks }) => {
  const submitButton = (
    <Button type={"violet"} css={{ width: "$space$134" }}>
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
      <Editor codeBlocks={codeBlocks} />
    </YStack>
  );
};

export default SandBox;

export const getServerSideProps = async () => {
  const username = "test";
  const codeBlocks = await databaseController.getCodeBlocks(username);

  return { props: { codeBlocks } };
};
