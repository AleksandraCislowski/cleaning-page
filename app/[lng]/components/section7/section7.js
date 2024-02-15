import classes from "./section7.module.css";
import Card from "./card";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function SectionSeven({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1 className={classes.header}>{t("s7h")}</h1>
        <Link href={`/${lng}`}>
          <Image src={logo} className={classes.icon} />
        </Link>
      </div>
      <div className={classes.box}>
        <Card icon='' text={t("s7p1")} text2='073 333 89 01' />
        <Card icon='' text={t("s7p2")} text2='aleksandra.swigon91@gmail.com' />
        <Card icon='' text={t("s7p3")} text2={t("s7p4")} />
        <Card icon='' text={t("s7p5")} />
      </div>
    </div>
  );
}
