import Link from "next/link";
import classes from "./section7.module.css";
export default function Card({ icon, text, text2 }) {
  return (
    <div className={classes.card}>
      <div>
        <div>{icon}</div>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
