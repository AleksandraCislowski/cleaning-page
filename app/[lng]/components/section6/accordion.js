import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import classes from "./accordion.module.css";

export default function AccordionItem({ question, answer }) {
  return (
    <main className={classes.container}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownOutlinedIcon />}
          className={classes.accordion_row}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails>{answer}</AccordionDetails>
      </Accordion>
    </main>
  );
}
