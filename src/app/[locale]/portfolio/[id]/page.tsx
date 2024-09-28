import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { createLink } from "@/helpers/methods";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { Routes } from "@/helpers/enums";

function ProjectPage({ params: { id } }: { params: { id: string } }) {
  const t = useTranslations("ProjectPage");
  const tDescription = useTranslations("Projects");

  const projectData = projects.find((el) => el.id === id);

  if (!projectData) {
    return (
      <main className={styles.projectPage}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>{t("notFound.title")}</h1>
            <p className={styles.text}>
              {t.rich("notFound.text", {
                portfolio: (chunks) => (
                  <Link href={Routes.portfolio} className={sharedStyles.link}>
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </Container>
      </main>
    );
  }

  const { title, skills, links, image } = projectData;

  return (
    <main className={styles.projectPage}>
      <Container>
        <div className={styles.content}>
          <section className={classNames(styles.section, styles.sectionTitle)}>
            <h1 className={styles.titleSection}>{title}</h1>
          </section>

          <section className={classNames(styles.section, styles.sectionImage)}>
            <a href={links.deploy} target="_blank">
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  {image ? (
                    <Image src={`/${image}`} alt={title} fill />
                  ) : (
                    <p>{t("noImage")}</p>
                  )}
                </div>
              </div>
            </a>
          </section>

          <section className={classNames(styles.section, styles.sectionLinks)}>
            <h2 className={styles.titleSection}>{t("links.title")}</h2>

            <div className={styles.links}>
              <a
                href={links.deploy}
                className={sharedStyles.link}
                target="_blank">
                {t("links.deploy")}
              </a>
              <a
                href={links.repository}
                className={sharedStyles.link}
                target="_blank">
                {t("links.repository")}
              </a>
            </div>
          </section>

          <section className={classNames(styles.section, styles.sectionSkills)}>
            <h2 className={styles.titleSection}>{t("technologies.title")}</h2>

            <ul className={styles.skills}>
              {skills.map((skill) => (
                <li key={skill}>
                  <Link href={createLink(skill)} className={sharedStyles.chip}>
                    {skill}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            className={classNames(styles.section, styles.sectionDescription)}>
            <h2 className={styles.titleSection}>{t("description.title")}</h2>

            <div className={styles.description}>
              {tDescription.rich(id, {
                p: (chunks) => <p className={styles.paragraph}>{chunks}</p>,
                ul: (chunks) => <ul className={styles.list}>{chunks}</ul>,
                li: (chunks) => <li className={styles.element}>{chunks}</li>,
                div: (chunks) => <div>{chunks}</div>,
              })}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default ProjectPage;
