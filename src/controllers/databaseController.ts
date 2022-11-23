import { PrismaClient } from "@prisma/client";
import { CodeBlocks, Resume } from "@src/types";
import { DefaultData } from "@src/utils/defaults";

const client = new PrismaClient();

export const saveResume = async (id: string, resume: Resume) => {

  await client.education.deleteMany({where: {
    resumeId: Number(id)
  }})
  await client.experience.deleteMany({where: {
    resumeId: Number(id)
  }})
  await client.project.deleteMany({where: {
    resumeId: Number(id)
  }})
  await client.skillSection.deleteMany({where: {
    resumeId: Number(id)
  }})
  const update = await client?.resume.update({
    where: {
      id: Number(id),
    },
    data: {
      username: resume.username,
      title: resume.title,
      createdAt: new Date(Date.now()).toDateString(),
      profile: resume.profile,
      educations: {
        createMany: {
          data: resume.educations.map(({ id, resumeId: _, ...education }) => education),
        },
      },
      experiences: {
        createMany: {
          data: resume.experiences.map(
            ({ id, resumeId: _, ...experience }) => experience
          ),
        },
      },
      projects: {
        createMany: {
          data: resume.projects.map(({ id, resumeId: _, ...project }) => project),
        },
      },
      skills: {
        createMany: {
          data: resume.skills.map(({ id, resumeId: _, ...skill }) => skill),
        },
      },
    },
  });

  return update
};

export const createEmptyResume = async (title: string, username: string) => {
  const User = await client.user.findUnique({
    where: { username },
  });
  if (User) {
    const resumeWithoutSection = await client?.resume.create({
      data: {
        username,
        title,
        createdAt: new Date(Date.now()).toDateString(),
        profile: DefaultData.profile(),
      },
    });
    const resume = await client.resume.update({
      where :{
        id: resumeWithoutSection.id
      }, data: {
        educations: {
          createMany: {
            data: [DefaultData.education(username,resumeWithoutSection.id)].map(
              ({ id, resumeId: _, ...education }) => education
            ),
          },
        },
        experiences: {
          createMany: {
            data: [DefaultData.experience(username, resumeWithoutSection.id)].map(
              ({ id, resumeId: _, ...experience }) => experience
            ),
          },
        },
        projects: {
          createMany: {
            data: [DefaultData.project(username, resumeWithoutSection.id)].map(
              ({ id,resumeId: _, ...project }) => project
            ),
          },
        },
        skills: {
          createMany: {
            data: [DefaultData.skillSection(username, resumeWithoutSection.id)].map(
              ({ id,resumeId: _, ...skill }) => skill
            ),
          },
        },
      }
    })


    return resume.id;
  }

  return null;
};

export const getResume = async (id: string): Promise<Resume | null> => {
  const resume = await client?.resume.findUnique({
    where: { id: Number(id) },
    include: {
      educations: true,
      experiences: true,
      projects: true,
      skills: true,
    },
  });

  if (!resume) {
    return null;
  }

  return resume as unknown as Resume;
};

export const getAllResumes = async (username: string) => {
  const resumes = await client.resume.findMany({
    where: {
      username,
    },
  });
  if (resumes) {
    return { resumes };
  } else {
    return null;
  }
};

export const saveCodeBlocks = async (codeblocks: CodeBlocks) => {
  const existingCodeBlocks = await client?.codeBlocks.findFirst({
    where: {
      username: codeblocks.username,
      challengeId: Number(codeblocks.challengeId),
    },
  });
  if (!existingCodeBlocks) {
    await client?.codeBlocks.create({
      data: {
        username: codeblocks.username,
        code: codeblocks.code,
        challengeId: Number(codeblocks.challengeId),
      },
    });
  } else {
    await client?.codeBlocks.update({
      where: {
        id: existingCodeBlocks.id,
      },
      data: {
        username: codeblocks.username,
        code: codeblocks.code,
        challengeId: Number(codeblocks.challengeId),
      },
    });
  }
};

export const getCodeBlocks = async (
  username: string,
  challengeId: number
): Promise<CodeBlocks | null> => {
  const codeBlocks = await client?.codeBlocks.findFirst({
    where: { username, challengeId },
  });

  if (!codeBlocks) {
    return null;
  }

  return codeBlocks as unknown as CodeBlocks;
};

export const saveUser = async (username: string, email: string) => {
  const existedUser = await client.user.findFirst({
    where: { username },
  });

  if (!existedUser) {
    const user = await client?.user.create({
      data: {
        username,
        email,
      },
    });

    return user;
  }
};

export const getUser = async (email: string) => {
  const user = await client?.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  return user;
};
