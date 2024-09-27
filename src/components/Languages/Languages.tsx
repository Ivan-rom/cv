import { useTranslations } from "next-intl";
import styles from "./languages.module.css";

const NATIVE = "native";

const languages = [
  {
    name: "russian",
    level: NATIVE,
  },
  {
    name: "english",
    level: "B1",
  },
];

function Languages() {
  const t = useTranslations("CV.languages");

  return (
    <>
      <h2 className={styles.title}>{t("title")}</h2>
      <ul className={styles.languages}>
        {languages.map((lang) => (
          <li key={lang.name} className={styles.language}>
            <p className={styles.name}>
              {t(`list.${lang.name}`)}

              <span className={styles.level}>
                {lang.level === NATIVE ? t("native") : lang.level}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Languages;
