import { Routes } from "./enums";

export const createLink = (skill: string) => {
  return `${Routes.portfolio}?${encodeURI(`filters=["${skill}"]`)}`;
};
