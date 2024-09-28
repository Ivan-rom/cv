"use client";

import { SkillsList } from "@/helpers/enums";
import Image from "next/image";
import Filter from "@/components/Filter/Filter";
import styles from "./projects.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Project = {
  id: number;
  title: string;
  image?: string;
  skills: SkillsList[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "GraphiQL App",
    image: "graphiql-app.png",
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
    ],
  },
  {
    id: 2,
    title: "Rss puzzle",
    image: "rss-puzzle.png",
    skills: [
      SkillsList.TypeScript,
      SkillsList.CSS,
      SkillsList.JavaScript,
      SkillsList.ESlint,
      SkillsList.Webpack,
    ],
  },
];

function Projects() {
  const searchParams = useSearchParams();

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([
    ...projects,
  ]);

  useEffect(() => {
    const encodedFilters = searchParams.get("filters");

    try {
      const decodedFiltersString = decodeURI(encodedFilters || "");
      const decodedFilters = JSON.parse(decodedFiltersString) as [];

      const newProjects = projects.filter((project) =>
        decodedFilters.every((filter) => project.skills.includes(filter))
      );

      setFilteredProjects(newProjects);
    } catch {
      setFilteredProjects([...projects]);
    }
  }, [searchParams]);

  return (
    <ul className={styles.projects}>
      {filteredProjects.map(({ id, title, skills, image }) => (
        <li key={id} className={styles.project}>
          <div className={styles.image}>
            {image ? (
              <Image
                src={`/${image}`}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <p>No image</p>
            )}
          </div>

          <div className={styles.description}>
            <h2 className={styles.projectTitle}>{title}</h2>

            <ul className={styles.skills}>
              {skills.map((skill) => (
                <li key={skill}>
                  <Filter value={skill} />
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
