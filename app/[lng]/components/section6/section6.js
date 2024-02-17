import AccordionItem from "./Accordion";
import { useTranslation } from "@/app/i18n";
import classes from "./accordion.module.css";

export default async function SectionSix({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <h2 className={classes.header2}>{t("atit")}</h2>
      <AccordionItem lng={lng} question={t("ah1")} answer={t("ap1")} />
      <AccordionItem lng={lng} question={t("ah2")} answer={t("ap2")} />
      <AccordionItem lng={lng} question={t("ah3")} answer={t("ap3")} />
      <AccordionItem lng={lng} question={t("ah4")} answer={t("ap4")} />
      <AccordionItem lng={lng} question={t("ah5")} answer={t("ap5")} />
      <AccordionItem lng={lng} question={t("ah6")} answer={t("ap6")} />
      <AccordionItem lng={lng} question={t("ah7")} answer={t("ap7")} />
    </main>
  );
}
