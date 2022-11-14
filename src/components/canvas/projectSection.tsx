import { projectsAtom } from "@src/atoms/resume";
import { ProjectCard } from "@src/components/canvas/projectCard";
import { YStack } from "@src/components/stack";
import { SectionTitle } from "@src/components/typography";
import { useAtomValue } from "jotai";

export const ProjectSection = () => {
  const projects = useAtomValue(projectsAtom);

  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <YStack css={{ paddingTop: "$4" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </YStack>
    </>
  );
};
