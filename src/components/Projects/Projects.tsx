"use client";

import Image from "next/image";
import Filter from "@/components/Filter/Filter";
import styles from "./projects.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Project } from "@/helpers/types";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { Routes } from "@/helpers/enums";
import { useTranslations } from "next-intl";

function Projects() {
  const t = useTranslations("PortfolioPage");
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
          <Link href={`${Routes.portfolio}/${id}`}>
            <div className={styles.image}>
              {image ? (
                <Image src={`/${image}`} alt={title} fill />
              ) : (
                <p className={styles.emptyImage}>{t("noImage")}</p>
              )}
            </div>
          </Link>

          <div className={styles.description}>
            <Link href={`${Routes.portfolio}/${id}`}>
              <h2 className={styles.projectTitle}>{title}</h2>
            </Link>

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
