import Image from "next/image";
import me from "@/assets/me.jpg";
import { useTranslation } from "@/app/i18n";
import { PersonYearCounter, FirmaYearCounter } from "../Year-counter";
import classes from "./section1.module.css";

export default async function SectionOne({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={classes.background}>
      <div className={classes.container}>
        <div className={classes.image_box}>
          <Image
            src={me}
            alt='A cleaning lady with blue hair.'
            className={classes.img}
            priority
            id='section1'
          />
        </div>
        <div className={classes.text_box}>
          <h2 className={classes.header2}>{t("title")}</h2>
          <p className={classes.paragraph}>
            {t("par1")}
            <PersonYearCounter />
            {t("par2")}
            <FirmaYearCounter />
            {t("par3")}
          </p>
        </div>
      </div>
    </main>
  );
}
