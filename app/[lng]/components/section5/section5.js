import classes from "./section5.module.css";

export default function SectionFive() {
  return (
    <section className={classes.s2}>
      <h2>What other people think about us?</h2>
      <div className={classes.testimonials}>
        <div className={`${classes.card} ${classes.card_bg_purple}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Madeleine Adrienne</h3>
              <p>Regular customer</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            Aleksandra är verkligen världens bästa!
          </p>
          <p className={classes.card__quote}>
            "Inte bara det att hon städar utmärkt utan hon är också världens
            gulligaste! När jag var med om en olycka så ställde hon upp extra
            mycket och tog hand om mig! Människor med hjärtan som hennes finns
            det inte många utav ❤️ rekommenderar Aleksandra starkt! Jag skulle
            inte klarat mig utan henne! "
          </p>
          <br />
          <header className={classes.card__header}>
            <div>
              <h3>Elin</h3>
              <p>Former customer</p>
            </div>
          </header>
          <p className={classes.card__lead}>Superproffsig och duktig firma!</p>
          <p className={classes.card__quote}>
            "Anlitat dem ett flertal gånger och varit extremt nöjd varje gång."
          </p>
        </div>

        <div className={`${classes.card} ${classes.card_bg_gray_blue}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Boontariga</h3>
              <p>Regular customer</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            Kan varmt rekommendera Aleksandra.
          </p>
          <p className={classes.card__quote}>
            Har haft henne i väldigt många år och även rekommenderat henne till
            mina närmaste vänner. Hon är trevlig, noggrann och löser alltid vår
            behov! Vi har använt henne till flyttstädning, städ varje vecka,
            kontorsstädning och även montering av ikeamöbler. Kommer aldrig byta
            städfirma! Kan ge min varmaste rekommendationer 🌸
          </p>
        </div>

        <div className={classes.card}>
          <header className={classes.card__header}>
            <div>
              <h3>Ruth Josefin</h3>
              <p>Former customer</p>
            </div>
          </header>
          <p className={classes.card__lead}>Aleksandra är så noggrann!</p>
          <p className={classes.card__quote}>
            "Pålitlig och flexibel 🌸 har rekommenderat henne till flertal
            vänner då hon är extremt proffsig och städningen blir alltid i topp!
            👌🏻 "
          </p>
        </div>

        <div className={`${classes.card} ${classes.card_bg_black_blue}`}>
          <header className={classes.card__header}>
            <div>
              <h3>Jana</h3>
              <p>Regular customer</p>
            </div>
          </header>
          <p className={classes.card__lead}>
            Jag kan varmt rekommendera Aleksandra Cislowski Städfirma!
          </p>
          <p className={classes.card__quote}>
            "Det är alltid fint städat. Proffsigt! Hennes fönterputs är ngt
            extra! Hon är mkt flexibel och trevlig. Super lätt kommunicera via
            Mail eller SMS. Lämnar påminnelser vad behövs till nästa
            städtillfälle och överraskar med hälsningskort!
          </p>
        </div>

        <div className={classes.card}>
          <header className={classes.card__header}>
            <div>
              <h3>Sybille</h3>
              <p>Regular customer</p>
            </div>
          </header>
          <p className={classes.card__quote}>
            "Jag och min man arbetar båda heltid och vi var båda överens att vi
            skulle anlita städhjälp ca två dagar i månaden. Som så många andra
            tyckte vi dock det var ett stort steg att låta en främmande människa
            vara ensam i vår lägenhet flera timmar med allt vad det innebar. Vi
            var väl även båda två en aning misstänksamma mot städbranschen
            överlag med tanke på att branschen är ökänd för sina dåliga villkor
            och många gånger har det kommit fram att utsatta människor har
            utnyttjats på ett sätt som inte är värdigt. Lyckligtvis har vi haft
            turen att komma i kontakt med Aleksandra och hennes företag.
            Aleksandra talar flytande engelska (hon håller på och lär sig
            svenska) så kommunikationen har aldrig varit ett problem och det
            bästa av allt är att hon verkar trivas med sitt yrke. Hon har en
            fantastisk förmåga att "känna sin kund" och komma med synpunkter och
            "husmorstips" på t.ex. vilka kemikalier och städutrustning som bör
            köpas in. Det går säkert att hitta ett något billigare alternativ
            men för den som uppskattar förtroende och professionalitet samt vill
            vara säker på att verksamheten är hederlig så kan jag och min man
            varmt rekommendera Aleksandra 🌸"
          </p>
        </div>
      </div>
    </section>
  );
}
