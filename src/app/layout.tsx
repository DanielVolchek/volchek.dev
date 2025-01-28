import "../css/globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Suspense } from "react";

import { Navbar } from "@/components/navbar";
import { PageUpdateContext } from "@/lib/context/PageUpdateContext";

export const metadata: Metadata = {
  title: "Volchek.Dev",
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
        <Suspense>
          <Navbar />
          <PageUpdateContext>{children}</PageUpdateContext>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
