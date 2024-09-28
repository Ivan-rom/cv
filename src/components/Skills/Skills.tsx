import { SkillsList } from "@/helpers/enums";
import { Link } from "@/i18n/routing";
import styles from "./skills.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { createLink } from "@/helpers/methods";

const skills = Object.values(SkillsList);

function Skills() {
  return (
    <>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            <Link className={sharedStyles.chip} href={createLink(skill)}>
              {skill}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
