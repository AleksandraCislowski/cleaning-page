import classes from "./section7.module.css";
import { TextCard, MailCard, FbCard } from "./Card";
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
    <main className={classes.container}>
      <div className={classes.item_box}>
        <h2 className={classes.header2} id='section7'>
          {t("s7h")}{" "}
        </h2>
        <Link href={`/${lng}`}>
          <Image src={logo} className={classes.icon} />
        </Link>
      </div>
      <div className={classes.item_box}>
        <TextCard
          icon={<CallOutlinedIcon />}
          text={t("s7p1")}
          text2='073 333 89 01'
        />
        <MailCard
          icon={<AlternateEmailOutlinedIcon />}
          text={t("s7p2")}
          text2='aleksandra.swigon91@gmail.com'
        />
        <TextCard
          icon={<QueryBuilderOutlinedIcon />}
          text={t("s7p3")}
          text2={t("s7p4")}
        />
        <FbCard src={fblogo} />
      </div>
    </main>
  );
}
