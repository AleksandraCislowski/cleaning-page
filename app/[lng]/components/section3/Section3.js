import classes from "./section3.module.css";
import { useTranslation } from "@/app/i18n";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import t4 from "@/assets/t4.jpg";
import Card from "./Card";

export default async function SectionThree({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <main className={classes.background}>
      <div className={classes.container}>
        <h2 className={classes.header2} id='section3'>
          {t("h2")}
        </h2>
        <div className={classes.two_cards_box}>
          <Card
            imgSrc={t1}
            imgAlt={"A vacuum cleaner and a kitten next to it."}
            h2Text={t("s3t1")}
            pText={t("sd1")}
            button={t("btn")}
            link={"/card1"}
            lng={lng}
          />
          <Card
            imgSrc={t2}
            imgAlt={"Cleaning products and microfiber cloths."}
            h2Text={t("s3t2")}
            pText={t("sd2")}
            button={t("btn")}
            link={"/card2"}
            lng={lng}
          />
        </div>
        <div className={classes.two_cards_box}>
          <Card
            imgSrc={t3}
            imgAlt={"Window cleaning devices."}
            h2Text={t("s3t3")}
            pText={t("sd3")}
            button={t("btn")}
            link={"/card3"}
            lng={lng}
          />
          <Card
            imgSrc={t4}
            imgAlt={"Nicely folded toilet paper.'"}
            h2Text={t("s3t4")}
            pText={t("sd4")}
            button={t("btn")}
            link={"/card4"}
            lng={lng}
          />
        </div>
      </div>
    </main>
  );
}
