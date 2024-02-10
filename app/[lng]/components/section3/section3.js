import classes from "./section3.module.css";

export default function SectionThree() {
  return (
    <div className={classes.box1}>
      <h1>naglowek</h1>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <div>zdjecie</div>
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
        <div className={classes.box3}>
          <div>zdjecie</div>
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
      </div>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <div>zdjecie</div>
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
        <div className={classes.box3}>
          <div>zdjecie</div>
          <div>
            <h2>tytul</h2>
            <p>krotki opis</p>
          </div>
          <button>wiecej</button>
        </div>
      </div>
    </div>
  );
}
