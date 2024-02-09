import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Footer } from "../components/Footer";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <main>
      <>
        <h1>{t("title")}</h1>
        <Link href={`/${lng}`}>{t("back-to-home")}</Link>
        <Footer lng={lng} />
      </>
    </main>
  );
}
