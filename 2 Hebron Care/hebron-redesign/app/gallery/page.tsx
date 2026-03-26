// NOTE: This is a "use client" page and cannot export metadata directly.
// Page title/description is handled by the root layout or a separate metadata file
// (e.g., app/gallery/layout.tsx exporting metadata, or next-seo patterns).
// Suggested metadata: title "Gallery | Hebron Care", description "Tour our home in Everett, WA — living spaces, dining, outdoor gardens, and community areas."

"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const galleryImages = [
  { src: "/images/DSC00385-fotor-2026032515528.webp", alt: "Living room and common area", category: "living" },
  { src: "/images/DSC00397-fotor-2026032515820.webp", alt: "Dining area prepared for meals", category: "dining" },
  { src: "/images/DSC00412-fotor-2026032514584.webp", alt: "Comfortable bedroom suite", category: "living" },
  { src: "/images/DSC00423-fotor-2026032515228.webp", alt: "Garden and outdoor space", category: "outdoors" },
  { src: "/images/DSC00431-fotor-2026032515435.webp", alt: "Kitchen and preparation area", category: "dining" },
  { src: "/images/DSC00436-fotor-2026032514591.webp", alt: "Hallway and interior details", category: "living" },
  { src: "/images/DSC00438-fotor-2026032515127.webp", alt: "Community gathering space", category: "community" },
  { src: "/images/DSC00441-fotor-2026032515420.webp", alt: "Resident bedroom with natural light", category: "living" },
  { src: "/images/DSC00450-fotor-2026032515646.webp", alt: "Outdoor seating area", category: "outdoors" },
  { src: "/images/DSC00457-fotor-2026032515452.webp", alt: "Home entrance and exterior", category: "outdoors" },
  { src: "/images/DSC00460-fotor-2026032515345.webp", alt: "Cozy living area corner", category: "living" },
  { src: "/images/DSC00466-fotor-2026032515324.webp", alt: "Dining table set for family meal", category: "dining" },
  { src: "/images/DSC00471-fotor-2026032515724.webp", alt: "Bathroom with accessibility features", category: "living" },
  { src: "/images/DSC00500-fotor-20260325151731.webp", alt: "Activity and recreation area", category: "community" },
  { src: "/images/DSC00514-fotor-2026032515181.webp", alt: "Peaceful garden path", category: "outdoors" },
  { src: "/images/DSC00518-fotor-2026032515852.webp", alt: "Morning light in the living room", category: "living" },
  { src: "/images/DSC00529-fotor-2026032515838.webp", alt: "Comfortable reading nook", category: "living" },
  { src: "/images/DSC00548-fotor-20260325152253.webp", alt: "Backyard and landscaping", category: "outdoors" },
  { src: "/images/DSC00551-fotor-20260325151837.webp", alt: "Warm interior lighting", category: "community" },
  { src: "/images/DSC00566-fotor-20260325152310.webp", alt: "Fresh meal preparation", category: "dining" },
  { src: "/images/DSC00571-fotor-20260325152324.webp", alt: "Evening atmosphere in common area", category: "community" },
  { src: "/images/DSC00575-fotor-20260325151822.webp", alt: "Accessible bathroom details", category: "living" },
  { src: "/images/DSC00587-fotor-2026032515917.webp", alt: "Front porch and welcome area", category: "outdoors" },
];

// All images shown without filtering

// ---------------------------------------------------------------------------
// GalleryImage card
// ---------------------------------------------------------------------------

interface GalleryCardProps {
  image: (typeof galleryImages)[number];
  index: number;
  onClick: () => void;
}

function GalleryCard({ image, index, onClick }: GalleryCardProps) {
  // Stagger delay cycles through 0–3 columns
  const delay = (index % 4) * 0.07;

  return (
    <ScrollReveal delay={delay} direction="up" duration={0.6}>
      <motion.div
        layout
        layoutId={image.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="group relative cursor-pointer overflow-hidden rounded-lg"
        onClick={onClick}
        style={{ display: "block" }}
      >
        {/* Image — natural aspect ratio via width:100% + height:auto */}
        <div className="relative w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={{ display: "block" }}
          />

          {/* Subtle hover shadow ring */}
          <div className="absolute inset-0 rounded-lg ring-0 transition-all duration-300 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-xl" />
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------

interface LightboxProps {
  images: (typeof galleryImages)[number][];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index];

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Image container */}
      <motion.div
        key={image.src}
        className="relative z-10 flex max-h-[90vh] max-w-[92vw] flex-col items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={1400}
            height={1050}
            sizes="92vw"
            className="max-h-[80vh] max-w-[92vw] w-auto h-auto object-contain"
            priority
          />
        </div>

        {/* Image counter */}
        <p className="mt-3 font-sans text-xs font-light tracking-wide text-white/35">
          {index + 1} / {images.length}
        </p>
      </motion.div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Close"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {/* Prev arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white disabled:opacity-30"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>
      )}

      {/* Next arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white disabled:opacity-30"
          aria-label="Next image"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      )}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function GalleryPage() {
  // No category filtering, show all images
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === 0 ? filtered.length - 1 : i - 1
    );
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === filtered.length - 1 ? 0 : i + 1
    );
  }, [filtered.length]);

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Page header                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="pt-28 pb-10 px-6 text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-[var(--color-gold)] mb-4">
            Our Home
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-teal)] leading-tight">
            A look inside our home.
          </h1>
          <p className="mt-5 font-sans text-sm font-light text-[var(--color-ink-light)] max-w-md mx-auto leading-relaxed">
            Every corner is designed for comfort, dignity, and belonging. Browse
            our living spaces, dining areas, gardens, and gathering rooms.
          </p>
        </ScrollReveal>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Thin gold rule                                                      */}
      {/* ------------------------------------------------------------------ */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[var(--color-gold)]/20" />
      </div>


      {/* ------------------------------------------------------------------ */}
      {/* Masonry grid                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-4 md:px-6 pb-24 pt-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state (shouldn't happen but safety net) */}
        {filtered.length === 0 && (
          <p className="text-center font-sans text-sm text-[var(--color-ink-muted)] py-20">
            No images in this category yet.
          </p>
        )}
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Lightbox                                                            */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
