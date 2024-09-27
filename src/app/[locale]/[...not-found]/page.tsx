import { Link } from "@/i18n/routing";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { Routes } from "@/helpers/enums";
import Container from "@/components/Container/Container";
import { useTranslations } from "next-intl";

function NotFoundPageLocale() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>

          <h2 className={styles.subtitle}>{t("title")}</h2>

          <p className={styles.text}>
            {t.rich("text", {
              home: (chunks) => (
                <Link className={sharedStyles.link} href={Routes.cv}>
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

export default NotFoundPageLocale;
