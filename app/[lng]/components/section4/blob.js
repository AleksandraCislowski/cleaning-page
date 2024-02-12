import classes from "./section4.module.css";
import Image from "next/image";

export default function Blob({ text, iconImg, iconAlt }) {
  return (
    <div className={classes.box2}>
      <h1 className={classes.header}>{text}</h1>
      <Image className={classes.icon} src={iconImg} alt={iconAlt} />
    </div>
  );
}
