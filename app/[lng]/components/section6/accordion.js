import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import classes from "./accordion.module.css";

export default function AccordionMyItem({ question, answer, isExpanded }) {
  return (
    <div className={classes.container}>
      <Accordion defaultExpanded={isExpanded} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon />}
          className={classes.question}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails>{answer}</AccordionDetails>
      </Accordion>
    </div>
  );
}
