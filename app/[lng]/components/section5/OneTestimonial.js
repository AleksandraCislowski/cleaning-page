import classes from "./section5.module.css";

export function DoubleTestimonial({
  author1,
  a1_p,
  a1_lead,
  a1_quote,
  author2,
  a2_p,
  a2_lead,
  a2_quote,
  cardBackground,
}) {
  return (
    <div className={`${classes.card} ${classes[cardBackground]}`}>
      <header className={classes.card__header}>
        <div>
          <h3>{author1}</h3>
          <p>{a1_p}</p>
        </div>
      </header>
      <p className={classes.card__lead}>{a1_lead}</p>
      <p className={classes.card__quote}>{`"${a1_quote}"`}</p>
      <br />
      <header className={classes.card__header}>
        <div>
          <h3>{author2}</h3>
          <p>{a2_p}</p>
        </div>
      </header>
      <p className={classes.card__lead}>{a2_lead}</p>
      <p className={classes.card__quote}>{`"${a2_quote}"`}</p>
    </div>
  );
}

export function SingleTestimonial({
  author,
  text_p,
  text_lead,
  text_quote,
  cardBackground,
}) {
  return (
    <div className={`${classes.card} ${classes[cardBackground]}`}>
      <header className={classes.card__header}>
        <div>
          <h3>{author}</h3>
          <p>{text_p}</p>
        </div>
      </header>
      <p className={classes.card__lead}>{text_lead}</p>
      <p className={classes.card__quote}>{`"${text_quote}"`}</p>
    </div>
  );
}

