import { experiencesAtom } from "@src/atoms/resume";
import { XStack, YStack } from "@src/components/stack";
import {
  ItemDescription,
  ItemSubTitle,
  ItemTitle,
  SectionTitle,
} from "@src/components/typography";
import { MonthShortNames } from "@src/utils/constants";
import { useAtomValue } from "jotai";

export const ExperienceSection = () => {
  const experiences = useAtomValue(experiencesAtom);

  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((exp) => (
        <YStack key={exp.id} css={{ paddingBottom: "$26" }}>
          <ItemTitle>
            {exp.position}, {exp.company}
          </ItemTitle>
          <ItemSubTitle>
            {MonthShortNames[exp.from.month - 1]} {exp.from.year} -{" "}
            {MonthShortNames[exp.to.month - 1]} {exp.to.year} | {exp.location}
          </ItemSubTitle>
          {exp.description?.map(({ id, description }) => (
            <XStack key={id}>
              <ItemDescription css={{ marginLeft: "-$8", paddingRight: "$4" }}>
                •
              </ItemDescription>
              <ItemDescription>{description}</ItemDescription>
            </XStack>
          ))}
        </YStack>
      ))}
    </>
  );
};
