import { Link, View } from "@react-pdf/renderer";
import { BioText, SectionTitle } from "@src/components/pdf/pdfTypography";
import { TextWithIcon } from "@src/components/pdf/textWithIcon";
import { PDFStyles } from "@src/pdfStyles";
import { Profile } from "@src/types";

export const ProfileSection = ({ profile }: { profile: Profile }) => {
  return (
    <View style={PDFStyles.profileSection}>
      <SectionTitle style={PDFStyles.profileName}>{profile.name}</SectionTitle>
      <BioText>{profile.bio}</BioText>
      {!!profile.email && (
        <TextWithIcon icon="envelope" style={{ marginBottom: "10px" }}>
          {profile.email}
        </TextWithIcon>
      )}
      {!!profile.phone && (
        <TextWithIcon icon="phone" style={{ marginBottom: "10px" }}>
          {profile.phone}
        </TextWithIcon>
      )}
      {!!profile.location && (
        <TextWithIcon icon="location" style={{ marginBottom: "10px" }}>
          {profile.location}
        </TextWithIcon>
      )}
      {!!profile.linkedin && (
        <Link src={profile.linkedin || ""} style={PDFStyles.linkStyle}>
          <TextWithIcon icon="linkedin">{profile.linkedin}</TextWithIcon>
        </Link>
      )}
    </View>
  );
};
