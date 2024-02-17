import { useTranslation } from "@/app/i18n";
import classes from "./card3page.module.css";

export default async function Card3SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h2 className={classes.header2}>{t("c1h2")}</h2>
        <h3 className={classes.header3}>{t("c1h3")}</h3>
        <p className={classes.paragraph}>{t("c3p1")}</p>
        <p className={classes.paragraph}>{t("c3p2")}</p>
        <p className={classes.paragraph}>{t("c3p3")}</p>
        <p className={classes.paragraph}>{t("c3p4")}</p>
        <p className={classes.paragraph}>{t("c3p5")}</p>
      </div>
    </div>
  );
}
