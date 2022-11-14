import { Profile, SectionActionType } from "@src/types";
import { WritableDraft } from "immer/dist/internal";

export const profileReducer = (
  profile: WritableDraft<Profile>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field) {
        (profile as any)[payload.field] = payload.value;
      }
      break;
  }
};
