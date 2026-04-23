import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hebron Care Adult Family Home | Memory Care & Assisted Living | Everett, WA",
    template: "%s | Hebron Care",
  },
  description:
    "Licensed adult family home in Everett, WA providing 24/7 personalized care, memory support, and daily living assistance for up to 6 residents. Not a facility, a home.",
  metadataBase: new URL("https://hebroncareafh2.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hebroncareafh2.com",
    siteName: "Hebron Care Adult Family Home",
  },
  twitter: {
    card: "summary",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AssistedLivingFacility",
  "@id": "https://hebroncareafh2.com/#business",
  name: "Hebron Care Adult Family Home LLC #2",
  url: "https://hebroncareafh2.com",
  telephone: "+1-425-374-7954",
  email: "hebroncareafhllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2421 81st Pl SE",
    addressLocality: "Everett",
    addressRegion: "WA",
    postalCode: "98203",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.8923,
    longitude: -122.1763,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  description:
    "Licensed adult family home in Everett, WA providing 24/7 personalized care, memory support, and daily living assistance for up to 6 residents.",
  numberOfBeds: 6,
  areaServed: {
    "@type": "City",
    name: "Everett",
    sameAs: "https://en.wikipedia.org/wiki/Everett,_Washington",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
