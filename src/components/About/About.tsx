import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Routes } from "@/helpers/enums";
import styles from "./about.module.css";
import sharedStyles from "@/styles/shared.module.css";
import classNames from "classnames";

function About() {
  const t = useTranslations("CV.about");

  return (
    <>
      <h2 className={styles.title}>{t("title")}</h2>
      {t.rich("text", {
        p: (chunks) => <p className={styles.paragraph}>{chunks}</p>,
        span: (chunks) => <span className={styles.accent}>{chunks}</span>,
        github: (chunks) => (
          <Link
            className={classNames(sharedStyles.link, styles.link)}
            href={Routes.portfolio}>
            {chunks}
          </Link>
        ),
        contacts: (chunks) => (
          <Link
            className={classNames(sharedStyles.link, styles.link)}
            href="#contacts">
            {chunks}
          </Link>
        ),
        rs: (chunks) => (
          <a
            target="_about"
            className={classNames(sharedStyles.link, styles.link)}
            href="https://rs.school/">
            {chunks}
          </a>
        ),
      })}
    </>
  );
}

export default About;
