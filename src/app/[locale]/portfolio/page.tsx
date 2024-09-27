import Container from "@/components/Container/Container";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import { SkillsList } from "@/helpers/enums";
import sharedStyles from "@/styles/shared.module.css";

type Project = {
  id: number;
  title: string;
  image?: string;
  skills: SkillsList[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "GraphiQL App",
    image: "graphiql-app.png",
    skills: [
      SkillsList["Next JS"],
      SkillsList.TypeScript,
      SkillsList.CSS,
      SkillsList.JavaScript,
      SkillsList.i18next,
      SkillsList.ESlint,
      SkillsList.React,
      SkillsList.Redux,
      SkillsList.Webpack,
    ],
  },
  {
    id: 2,
    title: "Rss puzzle",
    image: "rss-puzzle.png",
    skills: [
      SkillsList.TypeScript,
      SkillsList.CSS,
      SkillsList.JavaScript,
      SkillsList.ESlint,
      SkillsList.Webpack,
    ],
  },
];

function Portfolio() {
  const t = useTranslations("PortfolioPage");

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{t("title")}</h1>

          <ul className={styles.projects}>
            {projects.map(({ id, title, skills, image }) => (
              <li key={id} className={styles.project}>
                <div className={styles.image}>
                  {image ? (
                    <Image
                      src={`/${image}`}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <p>No image</p>
                  )}
                </div>

                <div className={styles.description}>
                  <h2 className={styles.projectTitle}>{title}</h2>
                  <ul className={styles.skills}>
                    {skills.map((skill) => (
                      <li key={skill}>
                        <div className={sharedStyles.chip}>
                          <input type="checkbox" value={skill} />
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}

export default Portfolio;
