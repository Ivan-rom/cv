import classNames from "classnames";
import styles from "./contacts.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { useTranslations } from "next-intl";
import githubIcon from "@/assets/icons/github.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
import emailIcon from "@/assets/icons/email.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import { email } from "@/helpers/constants";

const contactsList = [
  {
    link: "https://github.com/Ivan-rom",
    icon: githubIcon,
    text: "Ivan-rom",
  },
  {
    link: "https://t.me/cotofe3y",
    icon: telegramIcon,
    text: "@cotofe3y",
  },
  {
    link: `mailto:${email}`,
    icon: emailIcon,
    text: email,
  },
  {
    link: "tel:+996500450226",
    icon: phoneIcon,
    text: "+996 500 450 226",
  },
];

function Contacts() {
  const t = useTranslations("CV.contacts");

  return (
    <>
      <h2 className={styles.title}>{t("title")}</h2>
      <ul className={styles.list}>
        {contactsList.map((contact) => (
          <li key={contact.link} className={styles.contact}>
            <contact.icon width={30} height={30} className={styles.icon} />
            <a
              className={classNames(sharedStyles.link, styles.link)}
              target="_blank"
              href={contact.link}>
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
