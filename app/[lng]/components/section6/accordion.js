import * as React from "react";
import { useTranslation } from "@/app/i18n";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import classes from "./accordion.module.css";

export default async function AccordionUsage({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.container}>
      <Accordion defaultExpanded>
        <AccordionSummary
          defaultExpanded
          expandIcon={<ExpandCircleDownIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          {t("ah1")}
        </AccordionSummary>
        <AccordionDetails>{t("ap1")}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
