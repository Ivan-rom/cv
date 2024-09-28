import { SkillsList } from "./enums";

export type Project = {
  id: string;
  title: string;
  image?: string;
  skills: SkillsList[];
  links: {
    deploy: string;
    repository: string;
  };
};
