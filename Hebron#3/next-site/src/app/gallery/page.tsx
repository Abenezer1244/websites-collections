import { Metadata } from "next";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Skagit River Adult Family Home in Mount Vernon, WA. See our welcoming exterior, comfortable interiors, private bedrooms, accessible amenities, and peaceful outdoor spaces.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main
        id="main"
        className="pt-36 md:pt-44 pb-24 px-6 md:px-12"
        tabIndex={-1}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm font-light text-rock/70 max-w-7xl mx-auto"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-clay transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Gallery</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-clay/10 text-clay-text text-xs font-normal uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              <ImageIcon className="w-3.5 h-3.5" />
              A Glimpse of Home
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-rock mb-6 leading-tight">
              Life at{" "}
              <span className="italic text-clay">Skagit River.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-rock/70 text-lg font-light leading-relaxed mb-4 max-w-xl mx-auto">
              Explore the spaces where our residents feel safe, comfortable, and
              truly at home every single day.
            </p>
          </FadeIn>

        </div>

        {/* Gallery */}
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.4}>
            <GalleryGrid />
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
