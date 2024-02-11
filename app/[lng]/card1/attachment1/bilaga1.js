import classes from "./page.module.css";
import { useTranslation } from "@/app/i18n";

export default async function Bilaga1({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <section className={classes.spikes}></section>
      <div className={classes.mainbox}>
        <div className={classes.container}>
          <h1 className={classes.header1}>{t("att1h1")}</h1>
          <h2 className={classes.header2}>{t("att1h2")}</h2>
          <p className={classes.paragraph}>{t("att1p1")}</p>
          <p className={classes.paragraph}>{t("att1p2")}</p>
          <p className={classes.paragraph}>{t("att1p3")}</p>
          <p className={classes.paragraph}>{t("att1p4")}</p>
          <p className={classes.paragraph}>{t("att1p5")}</p>
          <p className={classes.paragraph}>{t("att1p6")}</p>
        </div>
      </div>
      <section className={classes.spikes2}></section>
    </div>
  );
}
