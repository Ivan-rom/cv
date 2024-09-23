import { useTranslations } from "next-intl";

function Portfolio() {
  const t = useTranslations("PortfolioPage");

  return <h1>{t("title")}</h1>;
}

export default Portfolio;
