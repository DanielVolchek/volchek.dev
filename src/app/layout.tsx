import type { Metadata } from "next";
import "./globals.css";
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
      <body className="">
        <Navbar />
        <main className="flex flex-col items-center justify-center px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
