import type { Metadata } from "next";
import { Geist, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Grace Adult Family Home - Compassionate Senior Care in Lake Stevens, WA",
  description: "Licensed 6-bed adult family home in Lake Stevens, WA. Warm, family-like environment with personalized care for seniors in a tranquil, home-like setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${instrumentSerif.variable} bg-stone-200 min-h-screen flex flex-col items-center justify-center p-0 lg:p-6 font-sans text-stone-900 antialiased selection:bg-stone-900 selection:text-white`}
      >
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
