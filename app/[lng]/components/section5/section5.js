import classes from "./section5.module.css";
import { useTranslation } from "@/app/i18n";

export default async function SectionFive({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.container}>
      <section className={classes.s2}>
        <h2>{t("s5h2")}</h2>
        <div className={classes.testimonials}>
          <div className={`${classes.card} ${classes.card_bg_purple}`}>
            <header className={classes.card__header}>
              <div>
                <h3>Madeleine Adrienne</h3>
                <p>{t("s5c1p1")}</p>
              </div>
            </header>
            <p className={classes.card__lead}>{t("s5c1p2")}</p>
            <p className={classes.card__quote}>"{t("s5c1p3")}"</p>
            <br />
            <header className={classes.card__header}>
              <div>
                <h3>Elin</h3>
                <p>{t("s5c1p4")}</p>
              </div>
            </header>
            <p className={classes.card__lead}>{t("s5c1p5")}</p>
            <p className={classes.card__quote}>"{t("s5c1p6")}"</p>
          </div>

          <div className={`${classes.card} ${classes.card_bg_gray_blue}`}>
            <header className={classes.card__header}>
              <div>
                <h3>Boontariga</h3>
                <p>{t("s5c1p1")}</p>
              </div>
            </header>
            <p className={classes.card__lead}>{t("s5c1p7")}</p>
            <p className={classes.card__quote}>"{t("s5c1p8")}"</p>
          </div>

          <div className={classes.card}>
            <header className={classes.card__header}>
              <div>
                <h3>Ruth Josefin</h3>
                <p>{t("s5c1p4")}</p>
              </div>
            </header>
            <p className={classes.card__lead}>{t("s5c1p9")}</p>
            <p className={classes.card__quote}>"{t("s5c1p10")}"</p>
          </div>

          <div className={`${classes.card} ${classes.card_bg_black_pink}`}>
            <header className={classes.card__header}>
              <div>
                <h3>Jana</h3>
                <p>{t("s5c1p1")}</p>
              </div>
            </header>
            <p className={classes.card__lead}>{t("s5c1p11")}</p>
            <p className={classes.card__quote}>"{t("s5c1p12")}"</p>
          </div>

          <div className={classes.card}>
            <header className={classes.card__header}>
              <div>
                <h3>Sybille</h3>
                <p>{t("s5c1p1")}</p>
              </div>
            </header>
            <p className={classes.card__quote}>"{t("s5c1p13")}"</p>
          </div>
        </div>
      </section>
    </div>
  );
}
