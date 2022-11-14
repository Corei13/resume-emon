import {
  Education,
  Experience,
  Description,
  Project,
  Screenshot,
  Technology,
  SkillSection,
  Skill,
  Resume,
  Profile,
} from "@src/types";

export const DefaultData = {
  get experience(): Experience {
    return {
      id: Math.floor(Math.random() * 100000),
      company: "Add Company",
      position: "Add Position",
      from: { month: new Date().getMonth(), year: new Date().getFullYear() },
      to: { month: new Date().getMonth(), year: new Date().getFullYear() },
      description: [DefaultData.description],
      location: "Add Location",
    };
  },

  get description(): Description {
    return {
      id: Math.floor(Math.random() * 100000),
      description: "Add Description",
    };
  },

  get project(): Project {
    return {
      id: Math.floor(Math.random() * 100000),
      title: "Add Project Name",
      description: "Add Project Description",
      url: "Add Project Link",
      screenshots: [DefaultData.screenshot],
      technologies: [DefaultData.technology],
    };
  },

  get screenshot(): Screenshot {
    return {
      id: Math.floor(Math.random() * 100000),
      screenshot: "https://placekitten.com/600/500",
    };
  },

  get technology(): Technology {
    return {
      id: Math.floor(Math.random() * 100000),
      technology: "Add Technology",
    };
  },

  get education(): Education {
    return {
      id: Math.floor(Math.random() * 100000),
      school: "Add School",
      degree: "Add Degree",
      from: { month: new Date().getMonth(), year: new Date().getFullYear() },
      to: { month: new Date().getMonth(), year: new Date().getFullYear() },
    };
  },

  get skillSection(): SkillSection {
    return {
      id: Math.floor(Math.random() * 100000),
      title: "Add Skill Section Title",
      skills: [DefaultData.skill],
    };
  },

  get skill(): Skill {
    return {
      id: Math.floor(Math.random() * 100000),
      skill: "Add Skill",
    };
  },

  get profile(): Profile {
    return {
      name: "Add Name",
      avatar: "https://placekitten.com/200/200",
      cover: "https://placekitten.com/600/500",
      bio: "Add Bio",
      email: "Add Email",
      location: "Add Location",
      phone: "Add Phone",
      linkedin: "Add linkedin",
    };
  },

  get resume(): Resume {
    return {
      profile: DefaultData.profile,
      experiences: [DefaultData.experience],
      projects: [DefaultData.project],
      educations: [DefaultData.education],
      skills: [DefaultData.skillSection],
    };
  },
};
