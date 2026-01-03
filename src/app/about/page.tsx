import * as React from "react";
import { AboutHeroSection } from "./sections/about-hero-section";
import { MissionSection } from "./sections/mission-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <MissionSection />
    </div>
  );
}