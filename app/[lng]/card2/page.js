import { useTranslation } from "@/app/i18n";

export default async function Card2SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>2</p>
    </div>
  );
}
