import { useTranslation } from "@/app/i18n";
import classes from "./page.module.css";

export default async function Card1SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h1 className={classes.header1}>{t("c1h1")}</h1>
        <h2 className={classes.header2}>{t("c1h2")}</h2>
        <p className={classes.paragraph}>{t("c2p1")}</p>
        <p className={classes.paragraph}>{t("c2p2")}</p>
      </div>
    </div>
  );
}
