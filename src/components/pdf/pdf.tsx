import { BlobProvider, Document, Font, Page, View } from "@react-pdf/renderer";
import { ProfileSection } from "@src/components/pdf/profileSection";
import { EducationAndSkillSection } from "@src/components/pdf/educationAndSkillSection";
import { ExperienceSection } from "@src/components/pdf/experienceSection";
import { ReactNode } from "@mdx-js/react/lib";
import { useAtomValue } from "jotai";
import { resumeAtom } from "@src/atoms/resume";
import { PDFStyles } from "@src/pdfStyles";

const PDF = ({
  callbackFn,
}: {
  callbackFn: (_: {
    blob: Blob | null;
    url: string | null;
    loading: boolean;
    error: Error | null;
  }) => ReactNode;
}) => {
  const resume = useAtomValue(resumeAtom);

  Font.register({
    family: "LibreBaskerville",
    src: "/assets/fonts/LibreBaskerville-Bold.ttf",
  });
  Font.register({
    family: "LibreBaskervilleItalic",
    src: "/assets/fonts/LibreBaskerville-Italic.ttf",
  });
  Font.register({
    family: "Montserrat",
    src: "/assets/fonts/Montserrat-Medium.ttf",
  });
  Font.register({
    family: "Montserrat-Bold",
    src: "/assets/fonts/Montserrat-Bold.ttf",
  });

  return (
    <BlobProvider
      document={
        <Document title={resume.profile.name + "'s Resume"} author="Re:sume">
          <Page size="A4" style={PDFStyles.page}>
            <View style={PDFStyles.mainView}>
              <View style={PDFStyles.leftView}>
                <ProfileSection profile={resume.profile} />
                <EducationAndSkillSection
                  educations={resume.educations}
                  skills={resume.skills}
                />
              </View>
              <ExperienceSection experiences={resume.experiences} />
            </View>
          </Page>
        </Document>
      }
    >
      {callbackFn}
    </BlobProvider>
  );
};

export default PDF;
