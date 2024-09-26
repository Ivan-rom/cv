import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import classNames from "classnames";
import Contacts from "@/components/Contacts/Contacts";
import avatar from "@/assets/images/avatar.jpg";
import Skills from "@/components/Skills/Skills";

export default function Home() {
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
          </section>

          <section className={classNames(styles.section, styles.contacts)}>
            <Contacts />
          </section>

          <section className={classNames(styles.section, styles.skills)}>
            <Skills />
          </section>
        </div>
      </Container>
    </main>
  );
}
