import { Profile, SectionActionType } from "@src/types";
import { WritableDraft } from "immer/dist/internal";

export const profileReducer = (
  profile: WritableDraft<Profile>,
  { type, payload, value }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field) {
        (profile as any)[payload.field] = payload.value;
      }
      break;
    case "set":
      if (value) {
        const newProfile = value as Profile;

        (Object.keys(profile) as (keyof typeof profile)[]).forEach((key) => {
          if (typeof newProfile[key] !== "undefined") {
            profile[key] = newProfile[key]!;
          }
        });
      }
      break;
  }
};
