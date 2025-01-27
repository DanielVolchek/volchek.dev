"use client";

import { Header } from "@/components/Header";
import { WorkExperienceGroup } from "@/components/WorkSection";

export default function Work() {
  return (
    <main>
      <Header className="fade-in-element">Work Experience</Header>
      <WorkExperienceGroup />
    </main>
  );
}
