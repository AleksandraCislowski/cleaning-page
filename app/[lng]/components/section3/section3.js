import classes from "./section3.module.css";
import { useTranslation } from "@/app/i18n";
import t1 from "../../../../assets/t1.jpg";
import t2 from "../../../../assets/t2.jpg";
import t3 from "../../../../assets/t3.jpg";
import t4 from "../../../../assets/t4.jpg";
import Image from "next/image";

export default async function SectionThree({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.box1}>
      <h1 className={classes.header}>{t("h1")}</h1>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <Image src={t1} alt='A vacuum cleaner and a kitten next to it.' />
          <div>
            <h2>tytul</h2>
            <p>{t("par1")}</p>
          </div>
          <button>wiecej</button>
        </div>
        <div className={classes.box3}>
          <Image src={t2} alt='Cleaning products and microfiber cloths.' />
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
      </div>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <Image src={t3} alt='Window cleaning devices.' />
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
        <div className={classes.box3}>
          <Image src={t4} alt='Nicely folded toilet paper.' />
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
      </div>
    </div>
  );
}
