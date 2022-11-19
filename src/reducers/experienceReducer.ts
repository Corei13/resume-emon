import { Description, Experience, SectionActionType } from "@src/types";
import { DefaultData } from "@src/utils/defaults";
import { WritableDraft } from "immer/dist/internal";

export const experienceReducer = (
  experiences: WritableDraft<Experience[]>,
  { type, payload, subsection }: SectionActionType
) => {
  if (subsection === "description" && payload?.index?.length) {
    descriptionReducer(experiences[payload.index[0]].description, {
      type,
      payload,
    });

    return;
  }

  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length) {
        (experiences[payload.index[0]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        experiences.splice(
          payload.index[0] + 1,
          0,
          DefaultData.experience(payload.username)
        );
      }
      break;
    case "remove":
      if (payload?.index?.length && experiences.length > 1) {
        experiences.splice(payload.index[0], 1);
      }
      break;
    case "up":
      if (payload?.index?.length && payload.index[0] > 0) {
        [experiences[payload.index[0]], experiences[payload.index[0] - 1]] = [
          experiences[payload.index[0] - 1],
          experiences[payload.index[0]],
        ];
      }
      break;
    case "down":
      if (payload?.index?.length && payload.index[0] < experiences.length - 1) {
        [experiences[payload.index[0]], experiences[payload.index[0] + 1]] = [
          experiences[payload.index[0] + 1],
          experiences[payload.index[0]],
        ];
      }
      break;
  }
};

export const descriptionReducer = (
  description: WritableDraft<Description[]>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length && payload.index.length > 1) {
        (description?.[payload.index[1]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        description?.push(DefaultData.description());
      }
      break;
    case "remove":
      if (payload?.index?.length && payload.index.length > 1) {
        description?.splice(payload.index[1], 1);
      }
      break;
    case "up":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] > 0
      ) {
        [description[payload.index[1]], description[payload.index[1] - 1]] = [
          description[payload.index[1] - 1],
          description[payload.index[1]],
        ];
      }
      break;
    case "down":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] < description.length - 1
      ) {
        [description[payload.index[1]], description[payload.index[1] + 1]] = [
          description[payload.index[1] + 1],
          description[payload.index[1]],
        ];
      }
      break;
  }
};
