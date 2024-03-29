import classes from "./section7.module.css";
import Image from "next/image";

export function TextCard({ icon, text, text2 }) {
  return (
    <div className={classes.card}>
      <div>
        <div>{icon}</div>
        <p className={classes.paragraph}>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export function MailCard({ icon, text, text2 }) {
  return (
    <div className={classes.card}>
      <div>
        <div>{icon}</div>
        <p className={classes.paragraph}>{text}</p>
        <a href='mailto: aleksandra.swigon91@gmail.com'>
          <p>{text2}</p>
        </a>
      </div>
    </div>
  );
}

export function FbCard({ src }) {
  return (
    <div className={classes.card2}>
      <div>
        <a href='https://www.facebook.com/people/Aleksandra-Cislowski-St%C3%A4dfirma/100049051159295/?eid=ARAevyTA8p6Ty6yyykAMFlYIMz1Osk5IHiK2JmG_jVgKFb4jiLocIaATKMs9TWhHZ5M9EMPcSoM7zR_e&timeline_context_item_type=intro_card_work&timeline_context_item_source=100007544285132&fref=tag'>
          <Image src={src} className={classes.icon} />
        </a>
      </div>
    </div>
  );
}
