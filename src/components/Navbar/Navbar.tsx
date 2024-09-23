"use client";

import { Routes } from "@/helpers/enums";
import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import styles from "./navbar.module.css";

const links = [
  { href: Routes.cv, text: "cv" },
  { href: Routes.portfolio, text: "portfolio" },
];

function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <Link
          key={link.href}
          className={classNames(styles.link, {
            [styles.active]: isActiveLink(link.href),
          })}
          href={link.href}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
