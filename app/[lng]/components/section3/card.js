import classes from "./section3.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgSrc,
  imgAlt,
  lng,
  h2Text,
  pText,
  link,
  button,
}) {
  return (
    <div className={classes.one_card_box}>
      <Image src={imgSrc} alt={imgAlt} />
      <div className={classes.card_text}>
        <h2>{h2Text}</h2>
        <p>{pText}</p>
      </div>
      <div className={classes.separator} />
      <Link href={`/${lng}${link}`}>
        <button>{button}</button>
      </Link>
    </div>
  );
}
