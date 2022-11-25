import { Project, Screenshot, SectionActionType, Technology } from "@src/types";
import { DefaultData } from "@src/utils/defaults";
import { WritableDraft } from "immer/dist/internal";

export const projectsReducer = (
  projects: WritableDraft<Project[]>,
  { type, payload, subsection, value }: SectionActionType
) => {
  if (subsection === "technology" && payload?.index?.length) {
    technologyReducer(projects[payload.index[0]].technologies, {
      type,
      payload,
    });

    return;
  }

  if (subsection === "screenshot" && payload?.index?.length) {
    technologyReducer(projects[payload.index[0]].technologies, {
      type,
      payload,
    });

    return;
  }

  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length) {
        (projects[payload.index[0]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        projects.splice(
          payload.index[0] + 1,
          0,
          DefaultData.project(payload.username, payload.resumeId)
        );
      }
      break;
    case "remove":
      if (payload?.index?.length && projects.length > 1) {
        projects.splice(payload.index[0], 1);
      }
      break;
    case "up":
      if (payload?.index?.length && payload.index[0] > 0) {
        [projects[payload.index[0]], projects[payload.index[0] - 1]] = [
          projects[payload.index[0] - 1],
          projects[payload.index[0]],
        ];
      }
      break;
    case "down":
      if (payload?.index?.length && payload.index[0] < projects.length - 1) {
        [projects[payload.index[0]], projects[payload.index[0] + 1]] = [
          projects[payload.index[0] + 1],
          projects[payload.index[0]],
        ];
      }
      break;
    case "set":
      if (value) {
        while (projects.length) {
          projects.pop();
        }
        (value as Project[])?.forEach((item: Project) => projects.push(item));
      }
  }
};

export const technologyReducer = (
  technologies: WritableDraft<Technology[]>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length && payload.index.length > 1) {
        (technologies?.[payload.index[1]] as any)[payload.field] =
          payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        technologies?.push(DefaultData.technology());
      }
      break;
    case "remove":
      if (payload?.index?.length && payload.index.length > 1) {
        technologies?.splice(payload.index[1], 1);
      }
      break;
    case "up":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] > 0
      ) {
        [technologies[payload.index[1]], technologies[payload.index[1] - 1]] = [
          technologies[payload.index[1] - 1],
          technologies[payload.index[1]],
        ];
      }
      break;
    case "down":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] < technologies.length - 1
      ) {
        [technologies[payload.index[1]], technologies[payload.index[1] + 1]] = [
          technologies[payload.index[1] + 1],
          technologies[payload.index[1]],
        ];
      }
      break;
  }
};

export const screenshotReducer = (
  screenshots: WritableDraft<Screenshot[]>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length && payload.index.length > 1) {
        (screenshots?.[payload.index[1]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        screenshots?.push(DefaultData.screenshot());
      }
      break;
    case "remove":
      if (payload?.index?.length && payload.index.length > 1) {
        screenshots?.splice(payload.index[1], 1);
      }
      break;
    case "up":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] > 0
      ) {
        [screenshots[payload.index[1]], screenshots[payload.index[1] - 1]] = [
          screenshots[payload.index[1] - 1],
          screenshots[payload.index[1]],
        ];
      }
      break;
    case "down":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] < screenshots.length - 1
      ) {
        [screenshots[payload.index[1]], screenshots[payload.index[1] + 1]] = [
          screenshots[payload.index[1] + 1],
          screenshots[payload.index[1]],
        ];
      }
      break;
  }
};
