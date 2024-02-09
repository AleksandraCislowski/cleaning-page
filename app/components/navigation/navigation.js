import Link from "next/link";
import logo from "../../../assets/icons/logo.png";
import Image from "next/image";
import classes from "./navigation.module.css";
import { Footer } from "@/app/[lng]/components/Footer";

export default function Navigation({ lng }) {
  return (
    <div className={classes.bg}>
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
        <Footer lng={lng} />
      </nav>
    </div>
  );
}
