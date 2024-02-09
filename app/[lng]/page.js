import Hero from "./components/hero/hero";
import classes from "./components/navigation/navigation.module.css";
import SectionOne from "./components/section1/section1";

export default function Home({ lng }) {
  return (
    <main>
      <Hero />
      <div className={classes.bg2} />
      <SectionOne lng={lng} />
    </main>
  );
}
