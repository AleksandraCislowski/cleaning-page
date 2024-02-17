import ImageSlideshow from "./images-slideshow";
import classes from "./section2.module.css";
import { useTranslation } from "@/app/i18n";
import arrow from "../../../../assets/icons/arrow.png";
import Image from "next/image";

export default async function SectionTwo({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.mainbox}>
      <div className={classes.container}>
        <div className={classes.box2}>
          <ImageSlideshow />
        </div>
        <div className={classes.box2}>
          <h1 className={classes.header}>{t("s2")}</h1>
          <div>
            <Image
              className={classes.arrow}
              src={arrow}
              alt='A purple arrow that points to the images'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
