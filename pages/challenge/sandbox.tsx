import { ChallengesNav } from "@src/components/challenges/nav";
import { Timer } from "@src/components/challenges/timer";
import { Editor } from "@src/components/sandbox/editor";
import { YStack } from "@src/components/stack";

const SandBox = () => {
  return (
    <YStack>
      <ChallengesNav timer={<Timer />} isSandboxPage={true} />
      <Editor />
    </YStack>
  );
};

export default SandBox;
