import { SkillsList } from "@/helpers/enums";
import styles from "./skills.module.css";

const skills = Object.values(SkillsList);

function Skills() {
  return (
    <>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
