import type { Metadata } from "next";
import "../css/globals.css";
import { Navbar } from "@/components/navbar";

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
      <body className="mx-auto max-w-[750px]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
