import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hebron Care Adult Family Home | Everett, WA",
    template: "%s | Hebron Care",
  },
  description:
    "A licensed adult family home in Everett, WA. We care for your loved ones like family. Not a facility, a home.",
  metadataBase: new URL("https://2hebron-careafh.live"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2hebron-careafh.live",
    siteName: "Hebron Care Adult Family Home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
