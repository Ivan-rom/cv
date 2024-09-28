import Container from "@/components/Container/Container";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import ProjectsFilters from "@/components/ProjectsFilters/ProjectsFilters";
import Projects from "@/components/Projects/Projects";

function Portfolio() {
  const t = useTranslations("PortfolioPage");

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{t("title")}</h1>

          <ProjectsFilters />

          <Projects />
        </div>
      </Container>
    </main>
  );
}

export default Portfolio;
