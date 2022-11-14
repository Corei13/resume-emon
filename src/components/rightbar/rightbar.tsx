import { YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import {
  SkillSectionForm,
  SkillForm,
} from "@src/components/rightbar/skillForm";
import { useAtomValue } from "jotai";
import { selectedItemNameAtom } from "@src/atoms/selectedItem";
import { SelectedItemType } from "@src/types";
import { ProfileForm } from "@src/components/rightbar/profileForm";
import { EducationForm } from "@src/components/rightbar/educationForm";
import {
  DescriptionForm,
  ExperienceForm,
} from "@src/components/rightbar/experienceForm";
import {
  ProjectForm,
  ScreenshotForm,
  TechnologyForm,
} from "@src/components/rightbar/projectForm";

const renderForm = (selectedItemName?: SelectedItemType) => {
  if (!selectedItemName) {
    return <></>;
  }
  switch (selectedItemName.section) {
    case "profile":
      return <ProfileForm />;
    case "education":
      return <EducationForm />;
    case "description":
      return <DescriptionForm />;
    case "experience":
      return <ExperienceForm />;
    case "project":
      return <ProjectForm />;
    case "screenshot":
      return <ScreenshotForm />;
    case "technology":
      return <TechnologyForm />;
    case "skillSection":
      return <SkillSectionForm />;
    case "skill":
      return <SkillForm />;
  }
};

export const RightBar = () => {
  const selectedItemName = useAtomValue(selectedItemNameAtom);

  return (
    <YStack
      css={{
        flexGrow: 1,
        flexShrink: 0,
        minWidth: "15%",
        marginTop: "$16",
        paddingBottom: "$16",
        paddingX: "$16",
        overflow: "auto",
      }}
    >
      <Typography
        variant="sm"
        css={{ fontWeight: "$medium", marginBottom: "$16" }}
      >
        Properties
      </Typography>
      {renderForm(selectedItemName)}
    </YStack>
  );
};
