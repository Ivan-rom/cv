import Container from "../Container/Container";
import LocaleSelect from "../LocaleSelect/LocaleSelect";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
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
