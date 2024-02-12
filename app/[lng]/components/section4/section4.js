import { useTranslation } from "@/app/i18n";
import classes from "./section4.module.css";

export default async function SectionFour({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.container}>
      <div className={classes.box1}>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
        </div>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
        </div>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
        </div>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
        </div>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
        </div>
      </div>
    </div>
  );
}
