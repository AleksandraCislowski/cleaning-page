import classes from "./section3.module.css";
import Image from "next/image";

export default function Card({ imgSrc, imgAlt, h2Text, pText, button }) {
  return (
    <div className={classes.box3}>
      <Image src={imgSrc} alt={imgAlt} />
      <div className={classes.text}>
        <h2>{h2Text}</h2>
        <p>{pText}</p>
      </div>
      <div className={classes.separator} />
      <button>{button}</button>
    </div>
  );
}
