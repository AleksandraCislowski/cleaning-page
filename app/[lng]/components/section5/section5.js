import classes from "./section5.module.css";
import { DoubleTestimonial, SingleTestimonial } from "./OneTestimonial";
import { useTranslation } from "@/app/i18n";

export default async function SectionFive({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={classes.container}>
      <h2 className={classes.header2}>{t("s5h2")}</h2>
      <div className={classes.testimonials}>
        <DoubleTestimonial
          author1='Madeleine Adrienne'
          a1_p={t("s5c1p1")}
          a1_lead={t("s5c1p2")}
          a1_quote={t("s5c1p3")}
          author2='Elin'
          a2_p={t("s5c1p4")}
          a2_lead={t("s5c1p5")}
          a2_quote={t("s5c1p6")}
          cardBackground='card_bg_purple'
        />
        <SingleTestimonial
          author='Boontariga'
          text_p={t("s5c1p1")}
          text_lead={t("s5c1p7")}
          text_quote={t("s5c1p8")}
          cardBackground='card_bg_gray_blue'
        />
        <SingleTestimonial
          author='Ruth Josefin'
          text_p={t("s5c1p4")}
          text_lead={t("s5c1p9")}
          text_quote={t("s5c1p10")}
        />
        <SingleTestimonial
          author='Jana'
          text_p={t("s5c1p1")}
          text_lead={t("s5c1p11")}
          text_quote={t("s5c1p12")}
          cardBackground='card_bg_black_pink'
        />
        <SingleTestimonial
          author='Sybille'
          text_p={t("s5c1p1")}
          text_quote={t("s5c1p13")}
        />
      </div>
    </main>
  );
}
