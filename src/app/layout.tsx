import type { Metadata } from "next";
import { Agdasima, Anton } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIONSIN",
  description: "The Unseen Art",
};

const agdasima = Agdasima({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-body",
});

const anton = Anton({
  weight: ["400"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agdasima.variable} ${anton.variable}`}>
      <body className="antialiased flex flex-col h-svh">{children}</body>
    </html>
  );
}
