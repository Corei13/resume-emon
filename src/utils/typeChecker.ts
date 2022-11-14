import { Profile } from "@src/types";

export const isProfile = (obj: any): obj is Profile => {
  return obj.name !== undefined;
};
