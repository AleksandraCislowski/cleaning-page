import classes from "./section4.module.css";
import Image from "next/image";

export default function Blob({ text, iconImg, iconAlt }) {
  return (
    <div className={classes.box2}>
      <Image className={classes.icon} src={iconImg} alt={iconAlt} />
      <p className={classes.paragraph}>{text}</p>
    </div>
  );
}
