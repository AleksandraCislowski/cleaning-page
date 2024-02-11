import { useTranslation } from "@/app/i18n";
import classes from "./page.module.css";

export default async function Card1SubPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <div className={classes.hero}></div>
      <div className={classes.container}>
        <h1 className={classes.header1}>{t("c4h1")}</h1>
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
    </div>
  );
}
