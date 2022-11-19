import { YStack, XStack } from "@src/components/stack";
import { ProfileImages } from "@src/components/canvas/profileImages";
import { ProfileInfo } from "@src/components/canvas/profileInfo";
import { ExperienceSection } from "@src/components/canvas/experienceSection";
import { EducationSection } from "@src/components/canvas/educationSection";
import { SkillSection } from "@src/components/canvas/skillsSection";
import { ProjectSection } from "@src/components/canvas/projectSection";

export const ResumeCanvas = () => {
  return (
    <XStack
      css={{
        flexGrow: 1,
        background: "$white",
        width: "38rem",
        margin: "auto",
        marginY: "$60",
      }}
    >
      <YStack css={{ width: "100%" }}>
        <ProfileImages />
        <ProfileInfo />
        <XStack
          space={"$36"}
          css={{
            marginTop: "$32",
            marginX: "$40",
            borderBottom: "2px solid $gray200",
          }}
        >
          <YStack css={{ width: "66%" }}>
            <ExperienceSection />
          </YStack>
          <YStack css={{ width: "34%" }}>
            <EducationSection />
            <SkillSection />
          </YStack>
        </XStack>
        <YStack
          css={{
            marginTop: "$26",
            marginX: "$40",
          }}
        >
          <ProjectSection />
        </YStack>
      </YStack>
    </XStack>
  );
};
