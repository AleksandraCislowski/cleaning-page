import { useTranslation } from "@/app/i18n";

export default async function Card3SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>3</p>
    </div>
  );
}
