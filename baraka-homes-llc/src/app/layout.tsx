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
  title: "Baraka Homes LLC - Modern Adult Family Home",
  description: "Experience the future of compassionate care at Baraka Homes LLC. State-of-the-art facilities with personalized support.",
  keywords: [
    "adult family home",
    "Baraka Homes",
    "modern care",
    "residential care",
    "24/7 support",
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
    siteName: "Baraka Homes LLC",
    title: "Baraka Homes LLC - Modern Adult Family Home",
    description: "Experience the future of compassionate care at Baraka Homes LLC.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Baraka Homes LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraka Homes LLC - Modern Adult Family Home",
    description: "Experience the future of compassionate care at Baraka Homes LLC.",
    images: [siteConfig.ogImage],
    creator: "@barakahomes",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Baraka Homes LLC",
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
