"use client";

import { useEffect } from "react";

import { Header } from "@/components/Header";

export default function Work() {
  useEffect(() => {
    document.documentElement.style.setProperty("--page-secondary-color", "");
  }, []);

  return (
    <main>
      <Header className="fade-in-element">Work Experience</Header>
      <p className="fade-in-element">fade in 1</p>
      <p className="fade-in-element">fade in 1</p>
      <p className="fade-in-element">fade in 1</p>
      <p className="fade-in-element">fade in 1</p>
      <p className="fade-in-element">fade in 1</p>
      <p className="fade-in-element">fade in 1</p>
    </main>
  );
}
