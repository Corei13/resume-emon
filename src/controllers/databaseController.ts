import { PrismaClient } from "@prisma/client";
import { CodeBlocks, Resume } from "@src/types";

const client = new PrismaClient();

export const saveResume = async (id: string, resume: Resume) => {
  await client?.resume.delete({ where: { id: Number(id) } });

  await client?.resume.create({
    data: {
      username: resume.username,
      title: resume.title,
      profile: resume.profile,
      educations: {
        createMany: {
          data: resume.educations.map(({ id: _, ...education }) => education),
        },
      },
      experiences: {
        createMany: {
          data: resume.experiences.map(
            ({ id: _, ...experience }) => experience
          ),
        },
      },
      projects: {
        createMany: {
          data: resume.projects.map(({ id: _, ...project }) => project),
        },
      },
      skills: {
        createMany: {
          data: resume.skills.map(({ id: _, ...skill }) => skill),
        },
      },
    },
  });
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
