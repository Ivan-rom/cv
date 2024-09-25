"use client";

import { Routes } from "@/helpers/enums";
import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import styles from "./navbar.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { useTranslations } from "next-intl";

const links = [
  { href: Routes.cv, text: "cv" },
  { href: Routes.portfolio, text: "portfolio" },
];

function Navbar() {
  const t = useTranslations("Navbar");

  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <Link
          key={link.href}
          className={classNames(sharedStyles.link, styles.link, {
            [styles.active]: isActiveLink(link.href),
          })}
          href={link.href}>
          {t(link.text)}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
