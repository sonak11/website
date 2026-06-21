import { Hero } from "@/components/sections/Hero";
import { ThreeQuestions } from "@/components/sections/ThreeQuestions";
import { ResearchAtlas } from "@/components/sections/ResearchAtlas";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ResearchNotes } from "@/components/sections/ResearchNotes";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { BeyondResume } from "@/components/sections/BeyondResume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreeQuestions />
      <ResearchAtlas />
      <SelectedWork />
      <ResearchNotes />
      <CurrentFocus />
      <BeyondResume />
      <Contact />
    </>
  );
}
