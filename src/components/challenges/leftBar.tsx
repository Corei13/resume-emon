import { NavButton } from "@src/components/challenges/leftbarButton";
import { BackArrowIcon } from "@src/components/icons/backArrow";
import { ChallengesIcon } from "@src/components/icons/challenges";
import { MyResumeIcon } from "@src/components/icons/myResume";
import { ResumeIcon } from "@src/components/icons/resume";
import { XStack, YStack } from "@src/components/stack";

export const HomeLeftBar = () => {
  return (
    <YStack
      css={{
        width: "$178",
        height: "100vh",
        boxShadow: "0px $space$16 $space$28 0px $colors$gray200",
        zIndex: 999999,
      }}
      sticky={true}
    >
      <XStack
        space={"$20"}
        css={{
          height: "$space$80",
          width: "100%",
          alignItems: "center",
          paddingX: "$20",
          borderBottom: "$space$1 solid $gray200",
          marginBottom: "$10",
        }}
      >
        <ResumeIcon /> <BackArrowIcon />
      </XStack>
      <YStack space={"$16"}>
        <NavButton
          icon={<MyResumeIcon isSelected={false} />}
          label="My Resumes"
          isSelected={false}
        />
        <NavButton
          icon={<ChallengesIcon isSelected={true} />}
          label="Challenges"
          isSelected={true}
        />
      </YStack>
      <XStack></XStack>
    </YStack>
  );
};
