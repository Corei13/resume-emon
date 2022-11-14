import { Text, View } from "@react-pdf/renderer";
import { SectionTitle } from "@src/components/pdf/pdfTypography";
import { TextWithIcon } from "@src/components/pdf/textWithIcon";
import { PDFStyles } from "@src/pdfStyles";
import { Education, SkillSection } from "@src/types";
import { MonthNames } from "@src/utils/constants";

export const EducationAndSkillSection = ({
  educations,
  skills,
}: {
  educations: Education[];
  skills: SkillSection[];
}) => {
  return (
    <View style={PDFStyles.educationAndSkillSection}>
      <SectionTitle style={{ margin: "15px 0" }}>Education</SectionTitle>
      {educations.map((education) => (
        <View key={education.id} style={{ marginBottom: "15px" }}>
          <Text style={{ marginBottom: "8px" }}>{education.degree}</Text>
          <Text style={PDFStyles.schoolName}>{education.school}</Text>
          <TextWithIcon icon="calendar">
            {MonthNames[education.from.month - 1]} {education.from.year} -{" "}
            {MonthNames[education.to.month - 1]} {education.to.year}
          </TextWithIcon>
        </View>
      ))}
      <SectionTitle style={{ margin: "15px 0" }}>Skills</SectionTitle>
      {skills.map((skill) => (
        <View key={skill.id} style={{ marginBottom: "15px" }}>
          <Text style={PDFStyles.skillTitle}>{skill.title}</Text>
          <Text>
            {skill.skills.map((singleSkill) => singleSkill.skill).join(", ")}
          </Text>
        </View>
      ))}
    </View>
  );
};
