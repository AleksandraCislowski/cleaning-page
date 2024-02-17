import classes from "./bilaga1page.module.css";
import { useTranslation } from "@/app/i18n";

export default async function Bilaga1({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <section className={classes.spikes}></section>
      <div className={classes.background}>
        <div className={classes.container}>
          <h2 className={classes.header2}>{t("att1h2")}</h2>
          <h3 className={classes.header3}>{t("att1h3")}</h3>
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
            <li>{t("att1li19")}</li>
          </ul>
          <p className={classes.paragraph2}>{t("att1p8")}</p>
          <ul className={classes.list}>
            <li>{t("att1li12")}</li>
            <li>{t("att1li13")}</li>
            <li>{t("att1li14")}</li>
            <li>{t("att1li15")}</li>
            <li>{t("att1li16")}</li>
            <li>{t("att1li17")}</li>
            <li>{t("att1li18")}</li>
            <li>{t("att1li19")}</li>
          </ul>
          <p className={classes.paragraph2}>{t("att1p9")}</p>
          <ul className={classes.list}>
            <li>{t("att1li20")}</li>
            <li>{t("att1li21")}</li>
            <li>{t("att1li22")}</li>
            <li>{t("att1li23")}</li>
            <li>{t("att1li24")}</li>
          </ul>
        </div>
      </div>
      <section className={classes.spikes2}></section>
    </div>
  );
}
