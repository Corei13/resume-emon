import { TextInput } from "@src/components/input";
import { YStack } from "@src/components/stack";

export const SkillSectionForm = () => {
  return (
    <YStack>
      <TextInput name="title" title="Section" section="skillSection" />
    </YStack>
  );
};

export const SkillForm = () => {
  return (
    <YStack>
      <TextInput
        name="skill"
        title="Skill"
        section="skillSection"
        subsection="skill"
      />
    </YStack>
  );
};
