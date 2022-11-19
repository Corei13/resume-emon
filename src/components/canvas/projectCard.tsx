import { Project } from "@src/types";
import { XStack, YStack } from "@src/components/stack";
import { StyledImage } from "@src/components/image";
import {
  ItemDescription,
  ItemSubTitle,
  ItemTitle,
} from "@src/components/typography";
import { placeholderImageLink } from "@src/utils/constants";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <XStack space={"$26"} alignItems="center" padding={"0 0 $space$26 0"}>
      <StyledImage
        rounded
        src={project.screenshots[0]?.screenshot || placeholderImageLink}
        css={{ width: "$space$170" }}
      />
      <YStack>
        <ItemTitle variant="sm">{project.title}</ItemTitle>
        <ItemSubTitle>
          {project.technologies.map((t) => t.technology).join(", ")}
        </ItemSubTitle>
        <ItemDescription>{project.description}</ItemDescription>
      </YStack>
    </XStack>
  );
};
