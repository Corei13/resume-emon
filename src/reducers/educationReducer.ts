import { Education, SectionActionType } from "@src/types";
import { DefaultData } from "@src/utils/defaults";
import { WritableDraft } from "immer/dist/internal";

export const educationReducer = (
  educations: WritableDraft<Education[]>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length) {
        (educations[payload.index[0]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        educations.splice(
          payload.index[0] + 1,
          0,
          DefaultData.education(payload.username)
        );
      }
      break;
    case "remove":
      if (payload?.index?.length && educations.length > 1) {
        educations.splice(payload.index[0], 1);
      }
      break;
    case "up":
      if (payload?.index?.length && payload.index[0] > 0) {
        [educations[payload.index[0]], educations[payload.index[0] - 1]] = [
          educations[payload.index[0] - 1],
          educations[payload.index[0]],
        ];
      }
      break;
    case "down":
      if (payload?.index?.length && payload.index[0] < educations.length - 1) {
        [educations[payload.index[0]], educations[payload.index[0] + 1]] = [
          educations[payload.index[0] + 1],
          educations[payload.index[0]],
        ];
      }
      break;
  }
};
