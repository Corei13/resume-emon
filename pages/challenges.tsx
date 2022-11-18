import { AllChallenges } from "@src/components/challenges/allChallenges";
import { HomeLeftBar } from "@src/components/challenges/leftBar";
import { XStack } from "@src/components/stack";

const Challlenges = () => {
  return (
    <XStack>
      <HomeLeftBar />
      <AllChallenges />
    </XStack>
  );
};

export default Challlenges;
