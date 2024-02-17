import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import classes from "./accordion.module.css";

export default function AccordionMyItem({ question, answer }) {
  return (
    <div className={classes.container}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownOutlinedIcon />}
          className={classes.question}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails>{answer}</AccordionDetails>
      </Accordion>
    </div>
  );
}
