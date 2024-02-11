import classes from "./section3.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ imgSrc, imgAlt, h2Text, pText, link, button }) {
  return (
    <div className={classes.box3}>
      <Image src={imgSrc} alt={imgAlt} />
      <div className={classes.text}>
        <h2>{h2Text}</h2>
        <p>{pText}</p>
      </div>
      <div className={classes.separator} />
      <Link href={link}>
        <button>{button}</button>
      </Link>
    </div>
  );
}
