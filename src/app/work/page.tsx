"use client";

import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.documentElement.style.setProperty("--page-secondary-color", "");
  }, []);

  return (
    <main>
      <h1 className="fade-in-element">work page 1</h1>
      <h1 className="fade-in-element">work page 2</h1>
      <h1 className="fade-in-element">work page 3</h1>
    </main>
  );
}
