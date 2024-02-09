import { useTranslation } from "../i18n";
import { FirmaYearCounter } from "./components/year-counter";
import { PersonYearCounter } from "./components/year-counter";
import Hero from "./components/hero/hero";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <Hero />
      <h1>{t("title")}</h1>
      <p>
        {t("par1")}
        <PersonYearCounter />
        {t("par2")}
        <FirmaYearCounter />
        {t("par3")}
      </p>
    </main>
  );
}
