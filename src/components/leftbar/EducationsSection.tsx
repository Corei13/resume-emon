import { educationsAtom } from "@src/atoms/resume";
import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { ItemTitle } from "@src/components/leftbar/itemTitle";
import { SingleSectionWrapper } from "@src/components/leftbar/singleSectionWrapper";
import { YStack } from "@src/components/stack";
import { useAtomValue, useSetAtom } from "jotai";

export const EducationsSection = () => {
  const educations = useAtomValue(educationsAtom);

  return (
    <SingleSectionWrapper title="Educations" icon="educations">
      {educations.map((education, index) => (
        <SingleEducation key={education.id} index={index} />
      ))}
    </SingleSectionWrapper>
  );
};

const SingleEducation = ({ index }: { index: number }) => {
  const setSelectedItemName = useSetAtom(selectedItemNameAtom);

  return (
    <YStack>
      <ItemTitle
        title="Education"
        level={0}
        onClickHandler={() =>
          setSelectedItemName?.({ section: "education", index: [index] })
        }
        section="education"
        index={[index]}
      />
    </YStack>
  );
};
