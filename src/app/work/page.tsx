import { MainLayoutComponent } from "@/components/MainLayoutComponent";
import { WorkExperienceGroup } from "@/components/WorkSection";

export default function Work() {
  return (
    <MainLayoutComponent>
      <h1 className="fade-in-element text-4xl">Work</h1>
      <WorkExperienceGroup />
    </MainLayoutComponent>
  );
}
