import { ParagraphInput, TextInput } from "@src/components/input";
import { YStack } from "@src/components/stack";

export const ProfileForm = () => {
  return (
    <YStack>
      <TextInput name="name" title="Name" />
      <TextInput name="avatar" title="Avatar" />
      <TextInput name="cover" title="Cover Image" />
      <TextInput name="email" title="Email" />
      <TextInput name="phone" title="Phone" />
      <TextInput name="location" title="Location" />
      <TextInput name="linkedin" title="linkedin" />
      <ParagraphInput name="bio" title="Bio" />
    </YStack>
  );
};
