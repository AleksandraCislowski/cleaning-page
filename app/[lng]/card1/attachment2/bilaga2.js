import classes from "./page.module.css";
import { useTranslation } from "@/app/i18n";

export default async function Bilaga1({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <section className={classes.spikes}></section>
      <div className={classes.mainbox}>
        <div className={classes.container}>
          <h1 className={classes.header1}>{t("att2h1")}</h1>
          <ol className={classes.list}>
            <li>{t("att2li1")}</li>
            <li>{t("att2li2")}</li>
            <li>{t("att2li3")}</li>
            <li>{t("att2li4")}</li>
            <li>{t("att2li5")}</li>
            <li>{t("att2li6")}</li>
            <li>{t("att2li7")}</li>
            <li>{t("att2li8")}</li>
            <li>{t("att2li9")}</li>
            <li>{t("att2li10")}</li>
            <li>{t("att2li11")}</li>
            <li>{t("att2li12")}</li>
            <li>{t("att2li13")}</li>
            <li>{t("att2li14")}</li>
            <li>{t("att2li15")}</li>
            <li>{t("att2li16")}</li>
            <li>{t("att2li17")}</li>
            <li>{t("att2li18")}</li>
          </ol>
        </div>
      </div>
      <section className={classes.spikes2}></section>
    </div>
  );
}
