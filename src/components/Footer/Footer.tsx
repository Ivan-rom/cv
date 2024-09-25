import { useTranslations } from "next-intl";
import Container from "../Container/Container";
import styles from "./footer.module.css";
import sharedStyles from "@/styles/shared.module.css";
import classNames from "classnames";
import { email } from "@/helpers/constants";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.name}>{t("name")}</div>
          <a
            className={classNames(sharedStyles.link, styles.link)}
            href={`mailto:${email}`}>
            {email}
          </a>
          <div className={styles.copy}>2024 &copy;</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
