import { useTranslation } from "@/app/i18n";
import classes from "./section4.module.css";
import Blob from "./blob";
import icon1 from "@/assets/icons/icon1.png";

export default async function SectionFour({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.container}>
      <div className={classes.box1}>
        <div className={classes.blob1}>
          <Blob text='1' iconImg={icon1} altImg='An calendar icon.' />
        </div>
        <div className={classes.blob2}>
          <Blob text='1' iconImg={icon1} altImg='An calendar icon.' />
        </div>
        <div className={classes.blob3}>
          <Blob text='1' iconImg={icon1} altImg='An calendar icon.' />
        </div>
        <div className={classes.blob4}>
          <Blob text='1' iconImg={icon1} altImg='An calendar icon.' />
        </div>
        <div className={classes.blob5}>
          <Blob text='1' iconImg={icon1} altImg='An calendar icon.' />
        </div>
      </div>
    </div>
  );
}
