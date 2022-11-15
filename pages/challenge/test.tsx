import { ChallengeBody } from "@src/components/challenges/body";
import { XStack } from "@src/components/stack";
import { LeftBarV2 } from "@src/components/v2Leftbar/leftBar";

export const Test = () => {
  return (
    <XStack>
      <LeftBarV2 />
      <ChallengeBody />
    </XStack>
  );
};

export default Test;
