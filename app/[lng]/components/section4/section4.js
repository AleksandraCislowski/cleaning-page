import { useTranslation } from "@/app/i18n";
import classes from "./section4.module.css";
import Blob from "./blob";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import { PersonYearCounter } from "../year-counter";

export default async function SectionFour({ lng }) {
  const { t } = await useTranslation(lng);
  const blobText = PersonYearCounter();

  return (
    <div className={classes.box1}>
      <Blob
        text={`${t("blob1")}${blobText}`}
        iconImg={icon1}
        altImg='A calendar icon.'
        blobShape='blob1'
      />
      <Blob
        text={t("blob2")}
        iconImg={icon2}
        altImg='A woman icon.'
        blobShape='blob2'
      />
      <Blob
        text={t("blob3")}
        iconImg={icon3}
        altImg='A file icon.'
        blobShape='blob3'
      />
      <Blob
        text={t("blob4")}
        iconImg={icon4}
        altImg='A Trygghansa logo.'
        blobShape='blob4'
      />
      <Blob
        text={t("blob5")}
        iconImg={icon5}
        altImg='A Skatteverket logo.'
        blobShape='blob5'
      />
    </div>
  );
}
