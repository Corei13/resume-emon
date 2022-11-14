import { SingleSectionWrapper } from "@src/components/leftbar/singleSectionWrapper";
import { YStack } from "@src/components/stack";
import { useReducer } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { skillSectionAtom } from "@src/atoms/resume";
import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { SkillSection } from "@src/types";
import { ItemTitle } from "@src/components/leftbar/itemTitle";

export const SkillsSection = () => {
  const skills = useAtomValue(skillSectionAtom);

  return (
    <SingleSectionWrapper title="Skills" icon="skills">
      {skills.map((skill, index) => (
        <SingleSkill
          key={skill.id}
          skill={skill}
          skillSectionIndex={index}
          lastItem={index === skills.length - 1}
        />
      ))}
    </SingleSectionWrapper>
  );
};

const SingleSkill = ({
  skill,
  skillSectionIndex,
  lastItem,
}: {
  skill: SkillSection;
  skillSectionIndex: number;
  lastItem?: boolean;
}) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <YStack>
      <ItemTitle
        title="Section"
        onClickHandler={() => {
          toggleExpanded();
          setSelectedItemName?.({
            section: "skillSection",
            index: [skillSectionIndex],
          });
        }}
        expandable
        level={0}
        section="skillSection"
        index={[skillSectionIndex]}
        hideUpButton={skillSectionIndex === 0}
        hideDownButton={lastItem}
      />
      {expanded &&
        skill.skills?.map((singleSkill, index) => (
          <ItemTitle
            key={singleSkill.id}
            onClickHandler={() =>
              setSelectedItemName?.({
                section: "skill",
                index: [skillSectionIndex, index],
              })
            }
            title="Skill"
            level={1}
            subsection="skill"
            section="skillSection"
            index={[skillSectionIndex, index]}
            hideUpButton={index === 0}
            hideDownButton={index === skill.skills.length - 1}
          />
        ))}
    </YStack>
  );
};
