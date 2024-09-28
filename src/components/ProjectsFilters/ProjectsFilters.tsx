import { SkillsList } from "@/helpers/enums";
import styles from "./projectsFilter.module.css";
import Filter from "../Filter/Filter";

const filters = Object.values(SkillsList);

function ProjectsFilters() {
  return (
    <>
      <h3 className={styles.title}>Filters</h3>
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
