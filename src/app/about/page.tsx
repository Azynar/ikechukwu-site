import AboutHero    from "@/components/sections/about/AboutHero";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutJourney />
      <AboutValues />
    </>
  );
}