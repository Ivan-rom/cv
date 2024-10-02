import { useTranslations } from "next-intl";
import styles from "./education.module.css";
import sharedStyles from "@/styles/shared.module.css";

type EducationElement = {
  id: number;
  link?: string;
};

const educationList: EducationElement[] = [
  {
    id: 5,
  },
  {
    id: 4,
  },
  {
    id: 1,
    link: "https://app.rs.school/certificate/zpggjymc",
  },
  {
    id: 2,
    link: "https://app.rs.school/certificate/rhuezltn",
  },
  {
    id: 7,
  },
  {
    id: 6,
  },
  {
    id: 3,
  },
];

function Education() {
  const t = useTranslations("CV.education");

  return (
    <>
      <ul className={styles.list}>
        {educationList.map(({ id, link }) => (
          <li key={id} className={styles.element}>
            <div className={styles.text}>
              <h3 className={styles.elementTitle}>{t(`list.${id}.title`)}</h3>
              <p className={styles.date}>{t(`list.${id}.date`)}</p>
            </div>
            {link && (
              <a href={link} target="_blank" className={sharedStyles.file}>
                {t(`list.${id}.linkText`)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Education;
