import { Hero } from "@/components/sections/Hero";
import { WhatImBuilding } from "@/components/sections/WhatImBuilding";
import { FeaturedResearch } from "@/components/sections/FeaturedResearch";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ResearchTimeline } from "@/components/sections/ResearchTimeline";
import { LearningInPublic } from "@/components/sections/LearningInPublic";
import { BeyondResume } from "@/components/sections/BeyondResume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatImBuilding />
      <FeaturedResearch />
      <FeaturedProjects />
      <ResearchTimeline />
      <LearningInPublic />
      <BeyondResume />
      <Contact />
    </>
  );
}
