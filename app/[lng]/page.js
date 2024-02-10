import Hero from "./components/hero/hero";
import classes from "./components/navigation/navigation.module.css";
import SectionOne from "./components/section1/section1";
import SectionTwo from "./components/section2/section2";

export default function Home({ params: { lng } }) {
  return (
    <main>
      <Hero />
      <div className={classes.bg2} />
      <SectionOne lng={lng} />
      <section class='container'>
        <div class='wave'></div>
      </section>
      <SectionTwo lng={lng} />
    </main>
  );
}
