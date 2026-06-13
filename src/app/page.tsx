import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Stats from "@/components/sections/Stats";
import BioStrip from "@/components/sections/BioStrip";
import CTASection from "@/components/sections/CTASection";
import LatestPosts from "@/components/sections/LatestPosts";
import SpeakingCTA from "@/components/sections/SpeakingCTA";
export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Stats />
      <BioStrip />
      <CTASection />
      <LatestPosts />
      <SpeakingCTA />
    </>
  );
}