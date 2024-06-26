import { atomWithReducer } from "jotai/utils";
import produce from "immer";
import { experienceReducer } from "@src/reducers/experienceReducer";
import { educationReducer } from "@src/reducers/educationReducer";
import { projectsReducer } from "@src/reducers/projectsReducer";
import { atom, Getter } from "jotai";
import { DefaultData } from "@src/utils/defaults";
import { Resume, SectionActionType, SectionTypes } from "@src/types";
import { profileReducer } from "@src/reducers/profileReducer";
import { skillSectionReducer } from "@src/reducers/skillReducer";

export const profileAtom = atomWithReducer(
  DefaultData.profile,
  (profile, action: SectionActionType) =>
    produce(profile, (draft) => {
      profileReducer(draft, action);
    })
);

export const experiencesAtom = atomWithReducer(
  [DefaultData.experience],
  (experience, action: SectionActionType) =>
    produce(experience, (draft) => {
      experienceReducer(draft, action);
    })
);

export const educationsAtom = atomWithReducer(
  [DefaultData.education],
  (education, action: SectionActionType) =>
    produce(education, (draft) => {
      educationReducer(draft, action);
    })
);

export const projectsAtom = atomWithReducer(
  [DefaultData.project],
  (project, action: SectionActionType) =>
    produce(project, (draft) => {
      projectsReducer(draft, action);
    })
);

export const skillSectionAtom = atomWithReducer(
  [DefaultData.skillSection],
  (skillSection, action: SectionActionType) =>
    produce(skillSection, (draft) => {
      skillSectionReducer(draft, action);
    })
);

export const getSectionAtom = (section: SectionTypes) => {
  switch (section) {
    case "profile":
      return profileAtom;
    case "experience":
      return experiencesAtom;
    case "education":
      return educationsAtom;
    case "project":
      return projectsAtom;
    case "skillSection":
      return skillSectionAtom;
    default:
      return profileAtom;
  }
};

const resumeGetter = (get: Getter) => {
  const profile = get(profileAtom);
  const experiences = get(experiencesAtom);
  const educations = get(educationsAtom);
  const projects = get(projectsAtom);
  const skills = get(skillSectionAtom);

  const resume: Resume = {
    profile,
    experiences,
    educations,
    projects,
    skills,
  };

  return resume;
};

export const resumeAtom = atom<Resume>(resumeGetter);
