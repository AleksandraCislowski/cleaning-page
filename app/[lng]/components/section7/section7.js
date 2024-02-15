import classes from "./section7.module.css";
import Card from "./card";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import Link from "next/link";

export default function SectionSeven({ lng }) {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1 className={classes.header}>Kontakta</h1>
        <Link href={`/${lng}`}>
          <Image src={logo} className={classes.icon} />
        </Link>
      </div>
      <div className={classes.box}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
