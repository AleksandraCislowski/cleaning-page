import { useTranslation } from "@/app/i18n";
import classes from "./card1page.module.css";
import Link from "next/link";

export default async function Card1SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h2 className={classes.header2}>{t("c1h2")}</h2>
        <h3 className={classes.header3}>{t("c1h3")}</h3>
        <p className={classes.paragraph}>{t("c1p1")}</p>
        <p className={classes.paragraph2}>{t("c1p2")}</p>
        <ul className={classes.list}>
          <li>{t("c1li1")}</li>
          <li>{t("c1li2")}</li>
        </ul>
        <p className={classes.paragraph}>
          {t("c1p3")}
          <Link href='#list' legacyBehavior>
            <a>{t("c1a")}</a>
          </Link>
          .
        </p>
        <p className={classes.paragraph}>{t("c1p4")}</p>
        <p className={classes.paragraph}>{t("c1p5")}</p>
        <p className={classes.paragraph}>{t("c1p6")}</p>
        <p className={classes.paragraph}>{t("c1p7")}</p>
        <p className={classes.paragraph}>{t("c1p8")}</p>
        <p className={classes.paragraph}>{t("c1p9")}</p>
        <p className={classes.paragraph2} id='list'>
          {t("c1p10")}
        </p>
        <ul className={classes.list}>
          <li>{t("c1li3")}</li>
          <li>{t("c1li4")}</li>
          <li>{t("c1li5")}</li>
          <li>{t("c1li6")}</li>
          <li>{t("c1li7")}</li>
          <li>{t("c1li8")}</li>
          <li>{t("c1li9")}</li>
          <li>{t("c1li10")}</li>
          <li>{t("c1li11")}</li>
          <li>{t("c1li12")}</li>
          <li>{t("c1li13")}</li>
          <li>{t("c1li14")}</li>
        </ul>
        <p className={classes.paragraph}>{t("c1p11")}</p>
        <h4 className={classes.header4}>{t("c1p12")}</h4>
        <div className={classes.btnbox}>
          <Link href={`/${lng}/card1/attachment1`}>
            <button className={classes.btn}>{t("c1btn1")}</button>
          </Link>
          <Link href={`/${lng}/card1/attachment2`}>
            <button className={classes.btn}>{t("c1btn2")}</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
