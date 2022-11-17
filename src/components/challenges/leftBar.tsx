import { NavButton } from "@src/components/challenges/leftbarButton";
import { BackArrow } from "@src/components/icons/backArrow";
import { Challenges } from "@src/components/icons/challenges";
import { MyResume } from "@src/components/icons/myResume";
import { Resume } from "@src/components/icons/resume";
import { XStack, YStack } from "@src/components/stack";

export const HomeLeftBar = () => {
  return (
    <YStack
      css={{
        width: "178px",
        height: "100vh",
        boxShadow: "0px 16px 29px 0px #00000014",
        zIndex: 999999,
      }}
      sticky={true}
    >
      <XStack
        css={{
          height: "$space$80",
          width: "100%",
          alignItems: "center",
          gap: "$20",
          paddingX: "$20",
          borderBottom: "1px solid $gray200",
          marginBottom: "$10",
        }}
      >
        <Resume /> <BackArrow />
      </XStack>
      <YStack css={{ gap: "$16" }}>
        <NavButton
          icon={<MyResume isSelected={false} />}
          label="My Resumes"
          isSelected={false}
        />
        <NavButton
          icon={<Challenges isSelected={true} />}
          label="Challenges"
          isSelected={true}
        />
      </YStack>
      <XStack></XStack>
    </YStack>
  );
};
