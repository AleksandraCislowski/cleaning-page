import Link from "next/link";
import classes from "./section7.module.css";
import Image from "next/image";

export function Card({ icon, text, text2 }) {
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

export function Card2({ src }) {
  return (
    <div className={classes.card2}>
      <div>
        <Link href=''>
          <Image src={src} className={classes.icon} />
        </Link>
      </div>
    </div>
  );
}
