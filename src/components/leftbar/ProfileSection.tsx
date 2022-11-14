import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { SingleSectionWrapper } from "@src/components/leftbar/singleSectionWrapper";
import { XStack } from "@src/components/stack";
import { useSetAtom } from "jotai";

export const ProfileSection = () => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);

  return (
    <XStack
      onClick={() => setSelectedItemName?.({ section: "profile", index: [] })}
    >
      <SingleSectionWrapper title="Profile" icon="profile" notExpandable />
    </XStack>
  );
};
