import { SelectMonthYearInput, TextInput } from "@src/components/input";
import { YStack } from "@src/components/stack";

export const EducationForm = () => {
  return (
    <YStack>
      <TextInput name="school" title="School" section="education" />
      <TextInput name="degree" title="Degree" section="education" />
      <SelectMonthYearInput name="from" title="From" section="education" />
      <SelectMonthYearInput name="to" title="to" section="education" />
    </YStack>
  );
};
