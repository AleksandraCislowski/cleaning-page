import { useTranslation } from "@/app/i18n";
import { usePathname } from "next/navigation";

export default async function Card1SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  console.log(lng);

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>1</p>
    </div>
  );
}
