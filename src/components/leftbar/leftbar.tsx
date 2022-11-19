import { EducationsSection } from "@src/components/leftbar/EducationsSection";
import { ExperiencesSection } from "@src/components/leftbar/ExperiencesSection";
import { ProfileSection } from "@src/components/leftbar/ProfileSection";
import { ProjectsSection } from "@src/components/leftbar/ProjectsSection";
import { SkillsSection } from "@src/components/leftbar/SkillsSection";
import { YStack } from "@src/components/stack";

export const LeftBar = () => {
  return (
    <YStack
      padding={"0 $space$16 $space$16"}
      css={{
        flexGrow: 1,
        flexShrink: 0,
        minWidth: "15%",
        marginTop: "$40",
        overflow: "auto",
        userSelect: "none",
      }}
    >
      <ProfileSection />
      <ExperiencesSection />
      <ProjectsSection />
      <EducationsSection />
      <SkillsSection />
    </YStack>
  );
};
