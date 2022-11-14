import {
  SelectMonthYearInput,
  TextInput,
  ParagraphInput,
} from "@src/components/input";
import { YStack } from "@src/components/stack";

export const ExperienceForm = () => {
  return (
    <YStack>
      <TextInput name="company" title="Company" section="experience" />
      <TextInput name="position" title="Position" section="experience" />
      <TextInput name="location" title="Location" section="experience" />
      <SelectMonthYearInput name="from" title="From" section="experience" />
      <SelectMonthYearInput name="to" title="to" section="experience" />
    </YStack>
  );
};

export const DescriptionForm = () => {
  return (
    <YStack>
      <ParagraphInput
        name="description"
        title="Description"
        section="experience"
        subsection="description"
      />
    </YStack>
  );
};
