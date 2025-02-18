import "../css/globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { AnimationTrigger } from "@/components/AnimationTrigger";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Daniel Volchek | Portfolio",
  description: "Daniel Volchek - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto w-[95%]">
        <noscript>
          <style>{`
          .fade-in-element {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        `}</style>
        </noscript>
        <Navbar />
        {children}
        <AnimationTrigger />
        <Analytics />
      </body>
    </html>
  );
}
