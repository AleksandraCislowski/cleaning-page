import { useTranslation } from "@/app/i18n";
import classes from "./card4page.module.css";

export default async function Card4SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h2 className={classes.header2}>{t("c4h2")}</h2>
        <p className={classes.paragraph}>{t("c4p1")}</p>
        <p className={classes.paragraph2}>{t("c4p2")}</p>
        <ul className={classes.list}>
          <li>{t("c4li1")}</li>
          <li>{t("c4li2")}</li>
          <li>{t("c4li3")}</li>
          <li>{t("c4li4")}</li>
          <li>{t("c4li5")}</li>
        </ul>
      </div>
    </main>
  );
}
