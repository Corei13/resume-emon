export type Profile = {
  name: string;
  avatar: string; // url of the image
  cover: string; // url of the image
  bio: string;
  username?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
};

export type Description = {
  id: number;
  description: string;
};

export type Experience = {
  username?: string;
  id: number;
  position: string;
  company: string;
  from: {
    year: number;
    month: number;
  };
  to: {
    year: number;
    month: number;
  };
  description: Description[];
  location: string;
};

export type Education = {
  username?: string;
  id: number;
  school: string;
  degree: string;
  from: {
    year: number;
    month: number;
  };
  to: {
    year: number;
    month: number;
  };
};

export type Skill = {
  id: number;
  skill: string;
};

export type SkillSection = {
  id: number;
  title: string;
  skills: Skill[];
  username?: string;
};

export type Technology = {
  id: number;
  technology: string;
};

export type Screenshot = {
  id: number;
  screenshot: string;
};

export type Project = {
  id: number;
  username?: string;
  title: string;
  url: string;
  description: string;
  technologies: Technology[];
  screenshots: Screenshot[];
};

export type Resume = {
  username?: string;
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  educations: Education[];
  skills: SkillSection[];
};

export type TNavButton = {
  icon: React.ReactNode;
  label: string;
  isSelected: Boolean;
};

export type SectionTypes =
  | "profile"
  | "experience"
  | "education"
  | "project"
  | "description"
  | "technology"
  | "screenshot"
  | "skillSection"
  | "skill"
  | "none";

export type SectionActionType = {
  type: "add" | "update" | "remove" | "up" | "down";
  subsection?: SectionTypes;
  payload?: {
    field?: string;
    index?: number[];
    value?: unknown;
  };
};

export type SelectedItemType = { section: SectionTypes; index: number[] };
