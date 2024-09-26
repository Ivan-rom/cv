import { SkillsList } from "@/helpers/enums";
import styles from "./skills.module.css";
import { useTranslations } from "next-intl";

const skills = Object.values(SkillsList);

function Skills() {
  const t = useTranslations("CV.skills");

  return (
    <>
      <h2 className={styles.title}>{t("title")}</h2>
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
