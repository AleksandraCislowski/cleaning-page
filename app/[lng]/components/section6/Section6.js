import AccordionItem from "./Accordion";
import { useTranslation } from "@/app/i18n";
import classes from "./accordion.module.css";

export default async function SectionSix({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <h2 className={classes.header2}>{t("atit")}</h2>
      <AccordionItem lng={lng} question={t("aq1")} answer={t("ap1")} />
      <AccordionItem lng={lng} question={t("aq2")} answer={t("ap2")} />
      <AccordionItem lng={lng} question={t("aq3")} answer={t("ap3")} />
      <AccordionItem lng={lng} question={t("aq4")} answer={t("ap4")} />
      <AccordionItem lng={lng} question={t("aq5")} answer={t("ap5")} />
      <AccordionItem lng={lng} question={t("aq6")} answer={t("ap6")} />
      <AccordionItem lng={lng} question={t("aq7")} answer={t("ap7")} />
    </main>
  );
}
