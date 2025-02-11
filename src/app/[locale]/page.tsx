import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";
import classNames from "classnames";
import Contacts from "@/components/Contacts/Contacts";
import avatar from "@/assets/images/avatar.jpg";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Languages from "@/components/Languages/Languages";
import Education from "@/components/Education/Education";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("CV");

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <section className={classNames(styles.section, styles.image)}>
            <Image
              className={styles.avatar}
              src={avatar}
              alt={t("hero.name")}
              width="200"
              height="200"
            />
          </section>

          <section className={classNames(styles.section, styles.title)}>
            <h1 className={styles.name}>{t("hero.name")}</h1>
            <h2 className={styles.job}>{t("hero.job")}</h2>
            <a
              href={`/pdf/Ivan_Romanenko-${locale}.pdf`}
              download
              className={classNames(sharedStyles.file, styles.download)}>
              {t("hero.download")}
            </a>
          </section>

          <section
            id="contacts"
            className={classNames(styles.section, styles.contacts)}>
            <h2 className={styles.sectionTitle}>{t("contacts.title")}</h2>
            <Contacts />
          </section>

          <section className={classNames(styles.section, styles.languages)}>
            <h2 className={styles.sectionTitle}>{t("languages.title")}</h2>
            <Languages />
          </section>

          <section className={classNames(styles.section, styles.skills)}>
            <h2 className={styles.sectionTitle}>{t("skills.title")}</h2>
            <Skills />
          </section>

          <section className={classNames(styles.section, styles.about)}>
            <h2 className={styles.sectionTitle}>{t("about.title")}</h2>
            <About />
          </section>

          <section className={classNames(styles.section, styles.education)}>
            <h2 className={styles.sectionTitle}>{t("education.title")}</h2>
            <Education />
          </section>
        </div>
      </Container>
    </main>
  );
}
