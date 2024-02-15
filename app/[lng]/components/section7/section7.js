import classes from "./section7.module.css";
import { Card, Card2, Card3 } from "./card";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import fblogo from "@/assets/icons/fblogo.png";

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
        <Card
          icon={<CallOutlinedIcon />}
          text={t("s7p1")}
          text2='073 333 89 01'
        />
        <Card2
          icon={<AlternateEmailOutlinedIcon />}
          text={t("s7p2")}
          text2='aleksandra.swigon91@gmail.com'
        />
        <Card
          icon={<QueryBuilderOutlinedIcon />}
          text={t("s7p3")}
          text2={t("s7p4")}
        />
        <Card3 src={fblogo} />
      </div>
    </div>
  );
}
