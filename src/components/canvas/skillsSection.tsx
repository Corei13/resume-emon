import { skillSectionAtom } from "@src/atoms/resume";
import { YStack } from "@src/components/stack";
import {
  ItemDescription,
  ItemTitle,
  SectionTitle,
} from "@src/components/typography";
import { useAtomValue } from "jotai";

export const SkillSection = () => {
  const skills = useAtomValue(skillSectionAtom);

  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      {skills.map((skill) => (
        <YStack key={skill.id} css={{ paddingBottom: "$16" }}>
          <ItemTitle variant="xxs">{skill.title}</ItemTitle>
          <ItemDescription css={{ paddingTop: "$4" }}>
            {skill.skills.map((s) => s.skill).join(" • ")}
          </ItemDescription>
        </YStack>
      ))}
    </>
  );
};
