import classes from "./section7.module.css";
import Card from "./card";

export default function SectionSeven() {
  return (
    <div className={classes.container}>
      <h1>KONTAKTA OSS</h1>
      <div className={classes.box}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
