import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLAnguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLAnguage;

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "INTERCHANGE_LAGUAGES" }
  | { type: "SET_FROM_LANGUAGE"; payload: FromLanguage }
  | { type: "SET_TO_LANGUAGE"; payload: Language }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string };

export enum SectionType {
  From = "from",
  To = "to",
}
