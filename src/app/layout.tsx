import type { Metadata } from "next";
import "../css/globals.css";
import { Navbar } from "@/components/navbar";
import { PageUpdateContext } from "@/lib/context/PageUpdateContext";
import { Suspense } from "react";

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
      </body>
    </html>
  );
}
