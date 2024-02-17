import Hero from "./components/hero/Hero";
import classes from "./components/navigation/navigation.module.css";
import SectionOne from "./components/section1/Section1";
import SectionTwo from "./components/section2/Section2";
import SectionThree from "./components/section3/Section3";
import SectionFour from "./components/section4/Section4";
import SectionFive from "./components/section5/Section5";
import SectionSix from "./components/section6/Section6";
import SectionSeven from "./components/section7/Section7";

export default function Home({ params: { lng } }) {
  return (
    <main>
      <Hero />
      <div className={classes.bg_wave2} />
      <SectionOne lng={lng} />
      <section className='spikes'></section>
      <SectionTwo lng={lng} />
      <section className='spikes2'></section>
      <SectionThree lng={lng} />
      <SectionFour lng={lng} />
      <SectionFive lng={lng} />
      <SectionSix lng={lng} />
      <SectionSeven lng={lng} />
    </main>
  );
}
