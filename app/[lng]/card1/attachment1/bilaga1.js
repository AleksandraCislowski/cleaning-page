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
          <p className={classes.paragraph2}>{t("att1p7")}</p>
          <ul className={classes.list}>
            <li>{t("att1li1")}</li>
            <li>{t("att1li2")}</li>
            <li>{t("att1li3")}</li>
            <li>{t("att1li4")}</li>
            <li>{t("att1li5")}</li>
            <li>{t("att1li6")}</li>
            <li>{t("att1li7")}</li>
            <li>{t("att1li8")}</li>
            <li>{t("att1li9")}</li>
            <li>{t("att1li10")}</li>
            <li>{t("att1li11")}</li>
          </ul>
        </div>
      </div>
      <section className={classes.spikes2}></section>
    </div>
  );
}
