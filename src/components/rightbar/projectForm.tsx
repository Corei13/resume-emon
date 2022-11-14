import { ParagraphInput, TextInput } from "@src/components/input";
import { YStack } from "@src/components/stack";

export const ProjectForm = () => {
  return (
    <YStack>
      <TextInput name="title" title="Title" section="project" />
      <TextInput name="url" title="Url" section="project" />
      <ParagraphInput
        name="description"
        title="Description"
        section="project"
      />
    </YStack>
  );
};

export const TechnologyForm = () => {
  return (
    <YStack>
      <TextInput
        name="technology"
        title="Technology"
        section="project"
        subsection="technology"
      />
    </YStack>
  );
};

export const ScreenshotForm = () => {
  return (
    <YStack>
      <TextInput
        name="screenshot"
        title="Screenshot"
        section="project"
        subsection="screenshot"
      />
    </YStack>
  );
};
