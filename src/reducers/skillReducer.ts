import { SectionActionType, Skill, SkillSection } from "@src/types";
import { DefaultData } from "@src/utils/defaults";
import { WritableDraft } from "immer/dist/internal";

export const skillSectionReducer = (
  skills: WritableDraft<SkillSection[]>,
  { type, payload, subsection, value }: SectionActionType
) => {
  if (subsection === "skill" && payload?.index?.length) {
    skillReducer(skills[payload.index[0]].skills, {
      type,
      payload,
    });

    return;
  }

  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length) {
        (skills[payload.index[0]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        skills.splice(
          payload.index[0] + 1,
          0,
          DefaultData.skillSection(payload.username, payload.resumeId)
        );
      }
      break;
    case "remove":
      if (payload?.index?.length && skills.length > 1) {
        skills.splice(payload.index[0], 1);
      }
      break;
    case "up":
      if (payload?.index?.length && payload.index[0] > 0) {
        [skills[payload.index[0]], skills[payload.index[0] - 1]] = [
          skills[payload.index[0] - 1],
          skills[payload.index[0]],
        ];
      }
      break;
    case "down":
      if (payload?.index?.length && payload.index[0] < skills.length - 1) {
        [skills[payload.index[0]], skills[payload.index[0] + 1]] = [
          skills[payload.index[0] + 1],
          skills[payload.index[0]],
        ];
      }
      break;
    case "set":
      if(value) {
        while(skills.length) skills.pop();
        (value as SkillSection[])?.forEach((item:SkillSection) => skills.push(item))
      }
  }
};

export const skillReducer = (
  skills: WritableDraft<Skill[]>,
  { type, payload }: SectionActionType
) => {
  switch (type) {
    case "update":
      if (payload?.field && payload.index?.length && payload.index.length > 1) {
        (skills?.[payload.index[1]] as any)[payload.field] = payload.value;
      }
      break;
    case "add":
      if (payload?.index?.length) {
        skills?.push(DefaultData.skill());
      }
      break;
    case "remove":
      if (payload?.index?.length && payload.index.length > 1) {
        skills?.splice(payload.index[1], 1);
      }
      break;
    case "up":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] > 0
      ) {
        [skills![payload.index[1]], skills![payload.index[1] - 1]] = [
          skills![payload.index[1] - 1],
          skills![payload.index[1]],
        ];
      }
      break;
    case "down":
      if (
        payload?.index?.length &&
        payload.index.length > 1 &&
        payload.index[1] < skills!.length - 1
      ) {
        [skills![payload.index[1]], skills![payload.index[1] + 1]] = [
          skills![payload.index[1] + 1],
          skills![payload.index[1]],
        ];
      }
      break;
  }
};
