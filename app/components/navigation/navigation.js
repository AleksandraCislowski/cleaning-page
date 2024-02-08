import Link from "next/link";
import logo from "../../../assets/icons/logo.png";
import Image from "next/image";
import classes from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={classes.box}>
      <Link href='/'>
        <Image
          src={logo}
          alt='A cleaning lady with glasses'
          priority
          className={classes.svg}
        />
      </Link>
      <nav className={classes.nav}>
        <li>OM OSS</li>
        <li>TJÄNSTER</li>
        <li>KONTAKTA OSS</li>
      </nav>
    </div>
  );
}
