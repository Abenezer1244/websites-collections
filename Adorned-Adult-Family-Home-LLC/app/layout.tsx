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
  title: "Adorned AFH - Modern Adult Family Living",
  description: "Premium adult family living in Algona, WA. Where compassion meets luxury care.",
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
