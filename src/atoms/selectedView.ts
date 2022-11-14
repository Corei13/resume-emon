import { atom } from "jotai";

export const selectedViewAtom = atom<"canvas" | "pdf">("canvas");
