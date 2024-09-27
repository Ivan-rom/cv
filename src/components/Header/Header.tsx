"use client";

import { useEffect, useState } from "react";
import Container from "../Container/Container";
import LocaleSelect from "../LocaleSelect/LocaleSelect";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";
import classNames from "classnames";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerClasses = {
    [styles.header]: true,
    [styles.scrolled]: isScrolled,
  };

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);

    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={classNames(headerClasses)}>
      <Container>
        <div className={styles.content}>
          <Navbar />

          <div className={styles.locale}>
            <LocaleSelect />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
