import Link from "next/link";
import classes from "./section7.module.css";
export default function Card() {
  return (
    <div className={classes.card}>
      <div>
        <div>IKONA</div>
        <p>TEKST</p>
        <Link href=''>FB</Link>
      </div>
    </div>
  );
}
