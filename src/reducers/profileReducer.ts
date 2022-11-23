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
      if(value){
        const newProfile = value as Profile

        profile.avatar = newProfile.avatar
        profile.name = newProfile.name
        profile.bio = newProfile.bio
        profile.cover = newProfile.cover
        profile.email = newProfile.email
        profile.linkedin = newProfile.linkedin
        profile.location = newProfile.location
        profile.phone = newProfile.phone
        profile.username = newProfile.username
      }
      break;
  }
};
