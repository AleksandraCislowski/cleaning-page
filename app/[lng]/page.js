import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <>
        <h1>{t("title")}</h1>
        <p>{t("par1")}</p>
        {/* <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link> */}
        <Footer lng={lng} />
      </>
    </main>
  );
}
