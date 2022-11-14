import { SingleSectionWrapper } from "@src/components/leftbar/singleSectionWrapper";
import { YStack } from "@src/components/stack";
import { useReducer } from "react";
import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { useAtomValue, useSetAtom } from "jotai";
import { experiencesAtom } from "@src/atoms/resume";
import { Description, Experience } from "@src/types";
import { ItemTitle } from "@src/components/leftbar/itemTitle";

export const ExperiencesSection = () => {
  const experiences = useAtomValue(experiencesAtom);

  return (
    <SingleSectionWrapper title="Experiences" icon="experiences">
      {experiences.map((experience, index) => (
        <SingleExperience
          key={experience.id}
          experience={experience}
          index={index}
          lastItem={index === experiences.length - 1}
        />
      ))}
    </SingleSectionWrapper>
  );
};

const SingleExperience = ({
  experience,
  index,
  lastItem,
}: {
  experience: Experience;
  index: number;
  lastItem?: boolean;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <YStack>
      <ItemTitle
        title="Experience"
        onClickHandler={() => {
          toggleExpanded();
          setSelectedItemName?.({
            ...experience,
            section: "experience",
            index: [index],
          });
        }}
        expandable
        level={0}
        section="experience"
        index={[index]}
        hideUpButton={index === 0}
        hideDownButton={lastItem}
      />
      {expanded && (
        <Descriptions
          experienceIndex={index}
          descriptions={experience.description}
        />
      )}
    </YStack>
  );
};

const Descriptions = ({
  descriptions,
  experienceIndex,
}: {
  descriptions?: Description[];
  experienceIndex: number;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <>
      <ItemTitle
        title="Descriptions"
        level={1}
        onClickHandler={toggleExpanded}
        expandable
        subsection="description"
        section="experience"
        index={[experienceIndex]}
        hideRemoveButton
        hideUpButton
        hideDownButton
      />
      {expanded &&
        descriptions?.map((description, index) => (
          <ItemTitle
            key={description.id}
            onClickHandler={() =>
              setSelectedItemName?.({
                section: "description",
                index: [experienceIndex, index],
              })
            }
            title="Description"
            level={2}
            subsection="description"
            section="experience"
            index={[experienceIndex, index]}
            hideAddButton
            hideUpButton={index === 0}
            hideDownButton={index === descriptions.length - 1}
          />
        ))}
    </>
  );
};
