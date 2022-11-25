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
  experience(username: string, resumeId: number): Experience {
    return {
      username,
      resumeId,
      id: Math.floor(Math.random() * 100000),
      company: "Add Company",
      position: "Add Position",
      from: { month: new Date().getMonth(), year: new Date().getFullYear() },
      to: { month: new Date().getMonth(), year: new Date().getFullYear() },
      description: [DefaultData.description()],
      location: "Add Location",
    };
  },

  description(): Description {
    return {
      id: Math.floor(Math.random() * 100000),
      description: "Add Description",
    };
  },

  project(username: string, resumeId: number): Project {
    return {
      username,
      resumeId,
      id: Math.floor(Math.random() * 100000),
      title: "Add Project Name",
      description: "Add Project Description",
      url: "Add Project Link",
      screenshots: [DefaultData.screenshot()],
      technologies: [DefaultData.technology()],
    };
  },

  screenshot(): Screenshot {
    return {
      id: Math.floor(Math.random() * 100000),
      screenshot: "https://placekitten.com/600/500",
    };
  },

  technology(): Technology {
    return {
      id: Math.floor(Math.random() * 100000),
      technology: "Add Technology",
    };
  },

  education(username: string, resumeId: number): Education {
    return {
      username,
      resumeId,
      id: Math.floor(Math.random() * 100000),
      school: "Add School",
      degree: "Add Degree",
      from: { month: new Date().getMonth(), year: new Date().getFullYear() },
      to: { month: new Date().getMonth(), year: new Date().getFullYear() },
    };
  },

  skillSection(username: string, resumeId: number): SkillSection {
    return {
      username,
      resumeId,
      id: Math.floor(Math.random() * 100000),
      title: "Add Skill Section Title",
      skills: [DefaultData.skill()],
    };
  },

  skill(): Skill {
    return {
      id: Math.floor(Math.random() * 100000),
      skill: "Add Skill",
    };
  },

  profile(): Profile {
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

  resume(username: string, title: string, resumeId: number): Resume {
    return {
      username,
      title,
      createdAt: new Date(Date.now()),
      profile: DefaultData.profile(),
      experiences: [DefaultData.experience(username, resumeId)],
      projects: [DefaultData.project(username, resumeId)],
      educations: [DefaultData.education(username, resumeId)],
      skills: [DefaultData.skillSection(username, resumeId)],
    };
  },
};
