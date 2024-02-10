import Image from "next/image";
import me from "../../../../assets/me.jpg";
import { useTranslation } from "../../../i18n";
import {
  PersonYearCounter,
  FirmaYearCounter,
} from "../../components/year-counter";
import classes from "./section1.module.css";

export default async function SectionOne({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={classes.mainbox}>
      <div className={classes.box1}>
        <Image
          src={me}
          alt='A cleaning lady with blue hair.'
          className={classes.img}
          priority
        />
      </div>
      <div className={classes.box1}>
        <h1 className={classes.header}>{t("title")}</h1>
        <p className={classes.p}>
          {t("par1")}
          <PersonYearCounter />
          {t("par2")}
          <FirmaYearCounter />
          {t("par3")}
        </p>
      </div>
    </main>
  );
}
