import { SkillsList } from "@/helpers/enums";
import { Project } from "@/helpers/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "GraphiQL App",
    image: "graphiql-app.png",
    links: {
      deploy: "https://graphiql-app-roan.vercel.app/",
      repository: "https://github.com/Ivan-rom/graphiql-app",
    },
    skills: [
      SkillsList["Next JS"],
      SkillsList.TypeScript,
      SkillsList.CSS,
      SkillsList.JavaScript,
      SkillsList.i18next,
      SkillsList.ESlint,
      SkillsList.React,
      SkillsList.Redux,
      SkillsList.Webpack,
      SkillsList.Git,
      SkillsList.Vitest,
    ],
  },
  {
    id: "2",
    title: "Rss puzzle",
    image: "rss-puzzle.png",
    links: {
      deploy: "https://ivan-rom.github.io/ivan-rom-JSFE2023Q4/rss-puzzle/dist/",
      repository:
        "https://github.com/ivan-rom/ivan-rom-JSFE2023Q4/tree/rss-puzzle",
    },
    skills: [
      SkillsList.TypeScript,
      SkillsList.CSS,
      SkillsList.JavaScript,
      SkillsList.ESlint,
      SkillsList.Webpack,
      SkillsList.Git,
    ],
  },
  {
    id: "3",
    title: "Coffee house",
    image: "coffee-house.png",
    links: {
      deploy:
        "https://rolling-scopes-school.github.io/ivan-rom-JSFE2023Q4/coffee-house/home/",
      repository:
        "https://github.com/Ivan-rom/ivan-rom-JSFE2023Q4/tree/coffee-house-week3",
    },
    skills: [
      SkillsList.HTML,
      SkillsList["SCSS/SASS"],
      SkillsList.JavaScript,
      SkillsList.Git,
      SkillsList.Figma,
    ],
  },
];
