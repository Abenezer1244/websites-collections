import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EstateVault — Licensed Real Estate Brokerage",
  description: "Full-service real estate brokerage with 150+ expert agents across 28 markets. Exclusive listings, personalized service, and proven results with $2.5B+ in transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased text-slate-900 bg-[#F9FAFB] font-sans selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
