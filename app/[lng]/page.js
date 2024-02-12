import Hero from "./components/hero/hero";
import classes from "./components/navigation/navigation.module.css";
import SectionOne from "./components/section1/section1";
import SectionTwo from "./components/section2/section2";
import SectionThree from "./components/section3/section3";
import SectionFour from "./components/section4/section4";

export default function Home({ params: { lng } }) {
  return (
    <main>
      <Hero />
      <div className={classes.bg2} />
      <SectionOne lng={lng} />
      <section className='spikes'></section>
      <SectionTwo lng={lng} />
      <section className='spikes2'></section>
      <SectionThree lng={lng} />
      <SectionFour lnh={lng} />
    </main>
  );
}
