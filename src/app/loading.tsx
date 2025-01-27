import { DebounceComponent } from "@/components/DebounceComponent";

export default function Loading() {
  return (
    <DebounceComponent delay={750}>
      <p>Loading...</p>
    </DebounceComponent>
  );
}
