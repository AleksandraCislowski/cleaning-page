import classes from "./section5.module.css";

export default function SectionFive() {
  return (
    <section className={classes.s2}>
      <h2>What other people think about us?</h2>
      <div className={classes.testimonials}>
        <div className={`${classes.card} ${classes.card_bg_purple}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Daniel Clifford</h3>
              <p>Provides a temporary house</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            For many years my house has been used as a temporary home to many
            cats from High Paw. It feels great to be able to help!
          </p>
          <p className={classes.card__quote}>
            "When my first kitten came to me for the first time, my heart broke.
            All of his body was dirty, he was also weak and very sick. He had
            already been provided with medical care and all the necessary
            treatments, but he needed a place where he could recover and
            regenerate in peace. The period of recovery lasted a long time,
            several months. Fortunately, the kitten was adopted shortly after
            that. From that day I always knew I wanted to help animals in need.
            "
          </p>
        </div>

        <div className={`${classes.card} ${classes.card_bg_gray_blue}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Jonathan Walters</h3>
              <p>Just applied for an adoption</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            Just now I finished the adoption's application for Blinky!
          </p>
          <p className={classes.card__quote}>
            "I really hope my application will be granted and Blinky could start
            a new life with me at my small apartment. Fingers crossed! "
          </p>
        </div>

        <div className={classes.card}>
          <header className={classes.card__header}>
            <div>
              <h3>Jeanette Harmon</h3>
              <p>Honorary donor</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            Provided cat food and warm blankets and towels for the shelter
          </p>
          <p className={classes.card__quote}>
            "It feels amazing to be able to help! I'm an owner of an animal shop
            so I have access to a lot of useful resources. I just wanted to
            share with cats in need."
          </p>
        </div>

        <div className={`${classes.card} ${classes.card_bg_black_blue}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Patrick Abrahms</h3>
              <p>Adopted a cat few years ago</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            He adopted a cat named Squishy and from that day they are
            inseparable
          </p>
          <p className={classes.card__quote}>
            "Squishy came to me three years ago. I was having a very hard time
            in my life at the moment and I needed someone to help me get back on
            my feet. He turned out to be a great friend, now we create a new
            family together. I can't imagine my life without him anymore. I love
            him very much and my decision to adopt was the best in my entire
            life."
          </p>
        </div>

        <div className={classes.card}>
          <header className={classes.card__header}>
            <div>
              <h3>Kira Whittle</h3>
              <p>Volunteer</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            She has recently started her adventure with saving cats as a
            volunteer. In her spare time, she helps with the interventions and
            safeguards of animals
          </p>
          <p className={classes.card__quote}>
            "Recently, I participated in the rescue of a cat mother and her 5
            offspring. All the animals were in very bad condition, we didn't
            have much time to help them. The little ones were very cold and
            malnourished. Fortunately, all the animals were quickly taken to the
            vet's care and then to a temporary home. Now they are getting ready
            for the adoption process. I hope they will quickly find a new home
            and a loving, wonderful family to look after and care for them. That
            was a life changing experience. "
          </p>
        </div>
      </div>
    </section>
  );
}
