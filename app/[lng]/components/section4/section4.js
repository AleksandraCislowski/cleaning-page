import { useTranslation } from "@/app/i18n";
import classes from "./section4.module.css";
import Blob from "./Blob";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import { PersonYearCounter } from "../Year-counter";

export default async function SectionFour({ lng }) {
  const { t } = await useTranslation(lng);
  const blobText = PersonYearCounter();

  return (
    <main className={classes.container}>
      <Blob
        text={`${t("blob1")}${blobText}`}
        iconImg={icon1}
        altImg='A calendar icon.'
        blobShape='blob_shape_1'
      />
      <Blob
        text={t("blob2")}
        iconImg={icon2}
        altImg='A woman icon.'
        blobShape='blob_shape_2'
      />
      <Blob
        text={t("blob3")}
        iconImg={icon3}
        altImg='A file icon.'
        blobShape='blob_shape_3'
      />
      <Blob
        text={t("blob4")}
        iconImg={icon4}
        altImg='A Trygghansa logo.'
        blobShape='blob_shape_4'
      />
      <Blob
        text={t("blob5")}
        iconImg={icon5}
        altImg='A Skatteverket logo.'
        blobShape='blob_shape_5'
      />
    </main>
  );
}
