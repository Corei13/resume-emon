import { ChallengeBody } from "@src/components/challenges/challengeBody";
import { XStack } from "@src/components/stack";
import { HomeLeftBar } from "@src/components/challenges/leftBar";

export const Test = () => {
  return (
    <XStack>
      <HomeLeftBar />
      <ChallengeBody />
    </XStack>
  );
};

export default Test;
