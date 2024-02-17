import ImageSlideshow from "./Images-slideshow";
import classes from "./section2.module.css";
import { useTranslation } from "@/app/i18n";
import arrow from "../../../../assets/icons/arrow.png";
import Image from "next/image";

export default async function SectionTwo({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={classes.background}>
      <div className={classes.container}>
        <div className={classes.half_container}>
          <ImageSlideshow />
        </div>
        <div className={classes.half_container}>
          <h2 className={classes.header2}>{t("s2")}</h2>
          <div>
            <Image
              className={classes.arrow}
              src={arrow}
              alt='A purple arrow that points to the images'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
