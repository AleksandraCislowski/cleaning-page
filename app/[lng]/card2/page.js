import { useTranslation } from "@/app/i18n";
import classes from "./card2page.module.css";

export default async function Card2SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h2 className={classes.header2}>{t("c1h2")}</h2>
        <h3 className={classes.header3}>{t("c1h3")}</h3>
        <p className={classes.paragraph}>{t("c2p1")}</p>
        <p className={classes.paragraph}>{t("c2p2")}</p>
      </div>
    </main>
  );
}
