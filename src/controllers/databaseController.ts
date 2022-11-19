import { PrismaClient } from "@prisma/client";
import { CodeBlocks, Resume } from "@src/types";

const client = new PrismaClient();

export const saveResume = async (username: string, resume: Resume) => {
  await client?.experience.deleteMany({ where: { username } });
  await client?.education.deleteMany({ where: { username } });
  await client?.project.deleteMany({ where: { username } });
  await client?.skillSection.deleteMany({ where: { username } });
  try {
    await client?.resume.delete({ where: { username } });
  } catch (e) {}

  await client?.resume.create({
    data: {
      username,
      profile: resume.profile,
      educations: {
        createMany: {
          data: resume.educations.map(
            ({ username: _, ...education }) => education
          ),
        },
      },
      experiences: {
        createMany: {
          data: resume.experiences.map(
            ({ username: _, ...experience }) => experience
          ),
        },
      },
      projects: {
        createMany: {
          data: resume.projects.map(({ username: _, ...project }) => project),
        },
      },
      skills: {
        createMany: {
          data: resume.skills.map(({ username: _, ...skill }) => skill),
        },
      },
    },
  });
};

export const getResume = async (username: string): Promise<Resume | null> => {
  const resume = await client?.resume.findUnique({
    where: { username },
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

export const saveCodeBlocks = async (
  username: string,
  codeblocks: CodeBlocks
) => {
  await client?.codeBlocks.upsert({
    where: {
      username,
    },
    create: {
      username,
      code: codeblocks.code,
    },
    update: {
      code: codeblocks.code,
    },
  });
};

export const getCodeBlocks = async (
  username: string
): Promise<CodeBlocks | null> => {
  const codeBlocks = await client?.codeBlocks.findUnique({
    where: { username },
  });

  if (!codeBlocks) {
    return null;
  }

  return codeBlocks as unknown as CodeBlocks;
};
