import { NavButton } from "@src/components/challenges/leftbarButton";
import { BackArrowIcon } from "@src/components/icons/backArrow";
import { ChallengesIcon } from "@src/components/icons/challenges";
import { MyResumeIcon } from "@src/components/icons/myResume";
import { ResumeIcon } from "@src/components/icons/resume";
import { XStack, YStack } from "@src/components/stack";
import { useRouter } from "next/router";

export const HomeLeftBar = () => {
  const router = useRouter();

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
        alignItems="center"
        space={"$20"}
        padding={"0 $space$20"}
        css={{
          height: "$space$80",
          width: "100%",
          borderBottom: "$space$1 solid $gray200",
          marginBottom: "$10",
        }}
      >
        <ResumeIcon /> <BackArrowIcon />
      </XStack>
      <YStack space={"$16"}>
        <NavButton
          icon={
            <MyResumeIcon isSelected={router.pathname.includes("resume")} />
          }
          label="My Resumes"
          isSelected={router.pathname.includes("resume")}
          onClick={() => router.push("/resumes")}
        />
        <NavButton
          icon={
            <ChallengesIcon
              isSelected={router.pathname.includes("challenge")}
            />
          }
          label="Challenges"
          isSelected={router.pathname.includes("challenge")}
          onClick={() => router.push("challenges")}
        />
      </YStack>
      <XStack></XStack>
    </YStack>
  );
};
