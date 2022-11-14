import {
  educationsAtom,
  experiencesAtom,
  profileAtom,
  projectsAtom,
  skillSectionAtom,
} from "@src/atoms/resume";
import {
  Description,
  Education,
  Experience,
  Profile,
  Screenshot,
  SectionTypes,
  Skill,
  SkillSection,
  Technology,
} from "@src/types";
import { atom } from "jotai";

export const selectedItemNameAtom = atom<{
  section: SectionTypes;
  index: number[];
}>({
  section: "profile",
  index: [],
});

export const selectedItemAtom = atom<
  | Profile
  | Experience
  | Education
  | SkillSection
  | Description
  | Screenshot
  | Technology
  | Skill
  | undefined
>((get) => {
  const selectedItemName = get(selectedItemNameAtom);
  const profile = get(profileAtom);
  const experiences = get(experiencesAtom);
  const educations = get(educationsAtom);
  const projects = get(projectsAtom);
  const skills = get(skillSectionAtom);
  switch (selectedItemName.section) {
    case "profile":
      return profile;
    case "experience":
      return experiences[selectedItemName.index[0]];
    case "education":
      return educations[selectedItemName.index[0]];
    case "project":
      return projects[selectedItemName.index[0]];
    case "skillSection":
      return skills[selectedItemName.index[0]];
    case "description":
      return experiences[selectedItemName.index[0]]?.description?.[
        selectedItemName.index[1]
      ];
    case "screenshot":
      return projects[selectedItemName.index[0]]?.screenshots?.[
        selectedItemName.index[1]
      ];
    case "technology":
      return projects[selectedItemName.index[0]]?.technologies?.[
        selectedItemName.index[1]
      ];
    case "skill":
      return skills[selectedItemName.index[0]]?.skills?.[
        selectedItemName.index[1]
      ];
  }
});
