import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Routes } from "@/helpers/enums";
import styles from "./about.module.css";
import sharedStyles from "@/styles/shared.module.css";
import classNames from "classnames";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  href: string;
};

function About() {
  const t = useTranslations("CV.about");

  const TextLink = ({ children, href, ...rest }: LinkProps) => (
    <Link
      className={classNames(sharedStyles.link, sharedStyles.inText)}
      href={href}
      {...rest}>
      {children}
    </Link>
  );

  return (
    <>
      {t.rich("text", {
        p: (chunks) => <p className={styles.paragraph}>{chunks}</p>,
        span: (chunks) => <span className={styles.accent}>{chunks}</span>,
        github: (chunks) => (
          <TextLink href={Routes.portfolio}>{chunks}</TextLink>
        ),
        contacts: (chunks) => <TextLink href="#contacts">{chunks}</TextLink>,
        rs: (chunks) => (
          <TextLink href="https://rs.school/" target="_blank">
            {chunks}
          </TextLink>
        ),
      })}
    </>
  );
}

export default About;
