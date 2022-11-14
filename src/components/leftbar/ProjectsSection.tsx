import { SingleSectionWrapper } from "@src/components/leftbar/singleSectionWrapper";
import { YStack } from "@src/components/stack";
import { useReducer } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { projectsAtom } from "@src/atoms/resume";
import { Project, Screenshot, Technology } from "@src/types";
import { ItemTitle } from "@src/components/leftbar/itemTitle";

export const ProjectsSection = () => {
  const projects = useAtomValue(projectsAtom);

  return (
    <SingleSectionWrapper title="Projects" icon="projects">
      {projects.map((project, index) => (
        <SingleProject
          key={project.id}
          project={project}
          index={index}
          lastItem={index === projects.length - 1}
        />
      ))}
    </SingleSectionWrapper>
  );
};

const SingleProject = ({
  project,
  index,
  lastItem,
}: {
  project: Project;
  index: number;
  lastItem?: boolean;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <YStack>
      <ItemTitle
        title="Project"
        onClickHandler={() => {
          toggleExpanded();
          setSelectedItemName?.({ section: "project", index: [index] });
        }}
        section="project"
        index={[index]}
        expandable
        level={0}
        hideUpButton={index === 0}
        hideDownButton={lastItem}
      />
      {expanded && (
        <>
          <Technologies
            technologies={project.technologies}
            projectIndex={index}
          />
          <Screenshots screenshots={project.screenshots} projectIndex={index} />
        </>
      )}
    </YStack>
  );
};

const Technologies = ({
  technologies,
  projectIndex,
}: {
  technologies?: Technology[];
  projectIndex: number;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <>
      <ItemTitle
        title="Technologies"
        level={1}
        onClickHandler={toggleExpanded}
        expandable
        subsection="technology"
        section="project"
        index={[projectIndex]}
        hideRemoveButton
        hideUpButton
        hideDownButton
      />
      {expanded &&
        technologies?.map((technology, index) => (
          <ItemTitle
            key={technology.id}
            onClickHandler={() =>
              setSelectedItemName?.({
                section: "technology",
                index: [projectIndex, index],
              })
            }
            subsection="technology"
            section="project"
            index={[projectIndex, index]}
            title="Technology"
            level={2}
            hideAddButton
            hideUpButton={index === 0}
            hideDownButton={index === technologies.length - 1}
          />
        ))}
    </>
  );
};

const Screenshots = ({
  screenshots,
  projectIndex,
}: {
  screenshots?: Screenshot[];
  projectIndex: number;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <>
      <ItemTitle
        title="Screenshots"
        level={1}
        onClickHandler={toggleExpanded}
        expandable
        hideRemoveButton
        hideUpButton
        hideDownButton
        subsection="screenshot"
        section="project"
        index={[projectIndex]}
      />
      {expanded &&
        screenshots?.map((screenshot, index) => (
          <ItemTitle
            key={screenshot.id}
            onClickHandler={() =>
              setSelectedItemName?.({
                section: "screenshot",
                index: [projectIndex, index],
              })
            }
            title="Screenshot"
            level={2}
            hideAddButton
            hideUpButton={index === 0}
            hideDownButton={index === screenshots.length - 1}
            subsection="screenshot"
            section="project"
            index={[projectIndex, index]}
          />
        ))}
    </>
  );
};
