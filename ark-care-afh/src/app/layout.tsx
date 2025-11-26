import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { generateOrganizationSchema, siteConfig } from "@/lib/seo";
import "@/lib/env-validation"; // Validate environment variables on startup

// Initialize Sentry on client side
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
  import('../../sentry.client.config').catch(() => {
    // Silently fail if Sentry not configured
  })
}

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ark Care AFH - Quality Adult Family Home Care in Algona, WA",
  description: "Licensed adult family home providing compassionate, personalized 24/7 care in Algona, Washington. Specializing in mental health support, dementia care, and developmental disabilities.",
  keywords: [
    "adult family home",
    "Algona",
    "Washington",
    "care services",
    "dementia care",
    "mental health support",
    "developmental disabilities",
    "24/7 care",
    "licensed facility",
    "residential care",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Ark Care AFH - Quality Adult Family Home Care",
    description: "Licensed adult family home providing compassionate, personalized care with 24/7 support and specialized services.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ark Care AFH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark Care AFH - Quality Adult Family Home Care",
    description: "Licensed adult family home providing compassionate, personalized care with 24/7 support and specialized services.",
    images: [siteConfig.ogImage],
    creator: "@arkcare",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Force rebuild: violet-bloom theme v1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{overflow: 'visible'}}>
      <head>
        <JsonLd data={generateOrganizationSchema()} />
      </head>
      <body
        className={`${outfit.variable} antialiased flex flex-col min-h-screen`}
        style={{overflow: 'visible'}}
      >
        <Analytics />
        <Navigation />
        <main className="flex-grow overflow-visible">
          {children}
        </main>
        <Footer />
        {/* Tweakcn Live Preview Script */}
        <Script
          src="https://tweakcn.com/live-preview.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
