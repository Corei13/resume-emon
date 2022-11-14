import { educationsAtom } from "@src/atoms/resume";
import { YStack } from "@src/components/stack";
import {
  ItemDescription,
  ItemSubTitle,
  ItemTitle,
  SectionTitle,
} from "@src/components/typography";
import { useAtomValue } from "jotai";

export const EducationSection = () => {
  const educations = useAtomValue(educationsAtom);

  return (
    <>
      <SectionTitle>Education</SectionTitle>
      {educations.map((edu) => (
        <YStack key={edu.id} css={{ paddingBottom: "$26" }}>
          <ItemTitle variant="xxs">{edu.school}</ItemTitle>
          <ItemSubTitle>
            {edu.from.year} - {edu.to.year}
          </ItemSubTitle>
          <ItemDescription>{edu.degree}</ItemDescription>
        </YStack>
      ))}
    </>
  );
};
