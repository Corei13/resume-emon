import { EducationsSection } from "@src/components/leftbar/EducationsSection";
import { ExperiencesSection } from "@src/components/leftbar/ExperiencesSection";
import { ProfileSection } from "@src/components/leftbar/ProfileSection";
import { ProjectsSection } from "@src/components/leftbar/ProjectsSection";
import { SkillsSection } from "@src/components/leftbar/SkillsSection";
import { YStack } from "@src/components/stack";

export const LeftBar = () => {
  return (
    <YStack
      css={{
        flexGrow: 1,
        flexShrink: 0,
        minWidth: "15%",
        marginTop: "$40",
        paddingBottom: "$16",
        paddingX: "$16",
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
