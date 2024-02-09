import Link from "next/link";
import logo from "../../../../assets/icons/logo.png";
import Image from "next/image";
import classes from "./navigation.module.css";
import { Footer } from "@/app/[lng]/components/Footer";
import { useTranslation } from "@/app/i18n";

export default async function Navigation({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.bg}>
      <Link href='/sv'>
        <Image
          src={logo}
          alt='A cleaning lady with glasses'
          priority
          className={classes.svg}
        />
      </Link>
      <nav className={classes.nav}>
        <li>{t("n1")}</li>
        <li>{t("n2")}</li>
        <li>{t("n3")}</li>
        <Footer lng={lng} />
      </nav>
    </div>
  );
}
