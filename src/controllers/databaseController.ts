import { PrismaClient } from "@prisma/client";
import { CodeBlocks, Resume } from "@src/types";

class DatabaseController {
  private client: PrismaClient | null;

  constructor() {
    this.client = new PrismaClient();
    this.client.$connect();
  }

  public saveResume = async (username: string, resume: Resume) => {
    await this.client?.experience.deleteMany({ where: { username } });
    await this.client?.education.deleteMany({ where: { username } });
    await this.client?.project.deleteMany({ where: { username } });
    await this.client?.skillSection.deleteMany({ where: { username } });
    try {
      await this.client?.resume.delete({ where: { username } });
    } catch (e) {}

    await this.client?.resume.create({
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

  public getResume = async (username: string): Promise<Resume | null> => {
    const resume = await this.client?.resume.findUnique({
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

  public saveCodeBlocks = async (username: string, codeblocks: CodeBlocks) => {
    console.log("test", codeblocks, username);
    await this.client?.codeBlocks.upsert({
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

  public getCodeBlocks = async (
    username: string
  ): Promise<CodeBlocks | null> => {
    const codeBlocks = await this.client?.codeBlocks.findUnique({
      where: { username },
    });

    if (!codeBlocks) {
      return null;
    }

    return codeBlocks as unknown as CodeBlocks;
  };
}

const databaseController = new DatabaseController();
export default databaseController;
