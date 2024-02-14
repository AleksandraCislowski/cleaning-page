import AccordionMyItem from "./accordion";
import { useTranslation } from "@/app/i18n";
import classes from "./accordion.module.css";

export default async function SectionSix({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <h1 className={classes.header}>{t("atit")}</h1>
      <AccordionMyItem
        lng={lng}
        question={t("ah1")}
        answer={t("ap1")}
        isExpanded={true}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah2")}
        answer={t("ap2")}
        isExpanded={false}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah3")}
        answer={t("ap3")}
        isExpanded={false}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah4")}
        answer={t("ap4")}
        isExpanded={false}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah5")}
        answer={t("ap5")}
        isExpanded={false}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah6")}
        answer={t("ap6")}
        isExpanded={false}
      />
      <AccordionMyItem
        lng={lng}
        question={t("ah7")}
        answer={t("ap7")}
        isExpanded={false}
      />
    </div>
  );
}
