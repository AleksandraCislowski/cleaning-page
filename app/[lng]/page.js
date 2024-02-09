import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <>
        <h1>{t("title")}</h1>
        <p>{t("par1")}</p>
      </>
    </main>
  );
}
