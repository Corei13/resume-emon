import { Text, View } from "@react-pdf/renderer";
import { SectionTitle } from "@src/components/pdf/pdfTypography";
import { TextWithIcon } from "@src/components/pdf/textWithIcon";
import { PDFStyles } from "@src/pdfStyles";
import { Experience } from "@src/types";
import { MonthNames } from "@src/utils/constants";

export const ExperienceSection = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  return (
    <View style={PDFStyles.experienceSection}>
      <SectionTitle>Work Experience</SectionTitle>
      {experiences.map((experience) => (
        <View key={experience.id} style={PDFStyles.singleExperience}>
          <Text style={PDFStyles.positionName}>{experience.position}</Text>
          <Text style={PDFStyles.companyName}>{experience.company}</Text>
          <View style={PDFStyles.experienceDate}>
            <TextWithIcon icon="calendar" style={{ marginRight: "50px" }}>
              {MonthNames[experience.from.month]} {experience.from.year} -{" "}
              {MonthNames[experience.to.month]} {experience.to.year}
            </TextWithIcon>
            <TextWithIcon icon="location_dark">
              {experience.location}
            </TextWithIcon>
          </View>
          {experience.description.map(({ id, description }) => (
            <View key={id} style={PDFStyles.singleDescription}>
              <Text style={{ margin: "0 10px" }}>•</Text>
              <Text>{description}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
