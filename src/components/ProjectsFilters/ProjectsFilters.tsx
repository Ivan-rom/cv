import { SkillsList } from "@/helpers/enums";
import styles from "./projectsFilter.module.css";
import Filter from "../Filter/Filter";
import { useTranslations } from "next-intl";

const filters = Object.values(SkillsList);

function ProjectsFilters() {
  const t = useTranslations("PortfolioPage.filters");

  return (
    <>
      <h3 className={styles.title}>{t("title")}</h3>
      <ul className={styles.filters}>
        {filters.map((filter) => (
          <li key={filter}>
            <Filter value={filter} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectsFilters;
