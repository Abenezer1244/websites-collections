"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";

/* ------------------------------------------------------------------ */
/*  Gallery data — local WebP images, categorized                      */
/* ------------------------------------------------------------------ */

type Category = "all" | "exterior" | "living" | "kitchen" | "bedrooms" | "bathrooms" | "outdoor";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "exterior", label: "Exterior" },
  { value: "living", label: "Living Areas" },
  { value: "kitchen", label: "Kitchen & Dining" },
  { value: "bedrooms", label: "Bedrooms" },
  { value: "bathrooms", label: "Bathrooms" },
  { value: "outdoor", label: "Outdoor" },
];

const images: GalleryImage[] = [
  // Exterior
  { src: "/gallery/dsc00600.webp", alt: "Full front exterior of Skagit River", category: "exterior" },
  { src: "/gallery/dsc00588.webp", alt: "Front exterior with driveway", category: "exterior" },
  { src: "/gallery/dsc00613.webp", alt: "Front yard with blooming magnolia tree", category: "exterior" },
  { src: "/gallery/dsc00602.webp", alt: "Front porch and entrance at 2120 Forest Dr", category: "exterior" },
  { src: "/gallery/dsc00616.webp", alt: "Magnolia blossoms framing the home entrance", category: "exterior" },
  { src: "/gallery/dsc00620.webp", alt: "Side view of the home and front lawn", category: "exterior" },
  { src: "/gallery/dsc00609.webp", alt: "Flowering magnolia and landscaped yard", category: "exterior" },
  { src: "/gallery/dsc00597.webp", alt: "Neighborhood view with spring blossoms", category: "exterior" },

  // Living Areas
  { src: "/gallery/dsc00653.webp", alt: "Spacious living room with leather seating and natural light", category: "living" },
  { src: "/gallery/dsc00654.webp", alt: "Living room with wall-mounted TV and comfortable furniture", category: "living" },
  { src: "/gallery/dsc00662.webp", alt: "Open plan living room and kitchen with hardwood floors", category: "living" },
  { src: "/gallery/dsc00646.webp", alt: "Living area view through entry column", category: "living" },
  { src: "/gallery/dsc00690.webp", alt: "Open floor plan connecting kitchen, dining, and living areas", category: "living" },
  { src: "/gallery/dsc00760.webp", alt: "Hallway with hardwood floors leading to bedrooms", category: "living" },

  // Kitchen & Dining
  { src: "/gallery/dsc00681.webp", alt: "Modern kitchen with dark cabinetry and granite countertops", category: "kitchen" },
  { src: "/gallery/dsc00682.webp", alt: "Kitchen with stainless steel appliances and stone backsplash", category: "kitchen" },
  { src: "/gallery/dsc00686.webp", alt: "Kitchen stove area with stone backsplash detail", category: "kitchen" },
  { src: "/gallery/dsc00697.webp", alt: "Kitchen island with granite countertop and dishwasher", category: "kitchen" },
  { src: "/gallery/dsc00670.webp", alt: "Dining area with elegant table set for meals", category: "kitchen" },
  { src: "/gallery/dsc00673.webp", alt: "Dining room with chandelier and front door view", category: "kitchen" },
  { src: "/gallery/dsc00676.webp", alt: "Dining area view with kitchen counter in foreground", category: "kitchen" },

  // Bedrooms
  { src: "/gallery/dsc00722.webp", alt: "Bright bedroom with large windows and garden view", category: "bedrooms" },
  { src: "/gallery/dsc00725.webp", alt: "Bedroom with TV area, desk, and deck view", category: "bedrooms" },
  { src: "/gallery/dsc00729.webp", alt: "Comfortable bed with upholstered headboard and recliner", category: "bedrooms" },
  { src: "/gallery/dsc00698.webp", alt: "Resident bedroom with artwork and natural light", category: "bedrooms" },
  { src: "/gallery/dsc00701.webp", alt: "Resident bedroom with bedside table and recliner", category: "bedrooms" },
  { src: "/gallery/dsc00703.webp", alt: "Spacious bedroom with yoga mat and hardwood floors", category: "bedrooms" },
  { src: "/gallery/dsc00753.webp", alt: "Bedroom with adjustable bed, lamp, and recliner", category: "bedrooms" },
  { src: "/gallery/dsc00752.webp", alt: "Bedroom closeup with adjustable bed and seating", category: "bedrooms" },
  { src: "/gallery/dsc00758.webp", alt: "Bedroom with bed, TV, and window view of trees", category: "bedrooms" },

  // Bathrooms
  { src: "/gallery/dsc00708.webp", alt: "Accessible bathroom with grab bars and roll-in shower", category: "bathrooms" },
  { src: "/gallery/dsc00712.webp", alt: "Bathroom vanity with mirror and storage", category: "bathrooms" },
  { src: "/gallery/dsc00732.webp", alt: "Bathroom vanity with marble accent wall", category: "bathrooms" },
  { src: "/gallery/dsc00743.webp", alt: "Accessible shower with marble tile and shower chair", category: "bathrooms" },
  { src: "/gallery/dsc00751.webp", alt: "Accessible toilet with safety grab bars", category: "bathrooms" },
  { src: "/gallery/dsc00766.webp", alt: "Clean bathroom with grab bars and shower curtain", category: "bathrooms" },
  { src: "/gallery/dsc00769.webp", alt: "Walk-in shower with grab bars and non-slip mat", category: "bathrooms" },

  // Outdoor
  { src: "/gallery/dsc00770.webp", alt: "Covered deck with pergola, seating, and BBQ area", category: "outdoor" },
  { src: "/gallery/dsc00628.webp", alt: "Large backyard with green lawn and mature trees", category: "outdoor" },
  { src: "/gallery/dsc00630.webp", alt: "Backyard view with garden beds and deck", category: "outdoor" },
  { src: "/gallery/dsc00641.webp", alt: "Patio area with fire pit and pergola", category: "outdoor" },
];

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? images
        : images.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((c) =>
      c !== null && c > 0 ? c - 1 : filtered.length - 1
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((c) =>
      c !== null && c < filtered.length - 1 ? c + 1 : 0
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => {
              setActiveCategory(cat.value);
              setLightboxIndex(null);
            }}
            className={`px-5 py-2.5 rounded-full text-sm font-normal transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-rock text-sand"
                : "bg-stone/60 text-rock/70 hover:bg-stone hover:text-rock"
            }`}
          >
            {cat.label}
            {cat.value !== "all" && (
              <span className="ml-1.5 text-xs opacity-60">
                {images.filter((img) => img.category === cat.value).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
            >
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative w-full rounded-2xl overflow-hidden border border-rock/5 cursor-pointer focus-visible:ring-2 focus-visible:ring-clay focus-visible:outline-none"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) close();
        }}
      >
        <DialogPortal>
          <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <DialogTitle className="sr-only">
              {lightboxIndex !== null
                ? filtered[lightboxIndex].alt
                : "Gallery image"}
            </DialogTitle>

            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              {lightboxIndex !== null && (
                <motion.div
                  key={filtered[lightboxIndex].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                >
                  <Image
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].alt}
                    width={1600}
                    height={1000}
                    className="max-h-[85vh] w-auto h-auto object-contain rounded-lg mx-auto"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {lightboxIndex !== null && (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-light text-center max-w-md">
                {filtered[lightboxIndex].alt}
              </p>
            )}
          </div>
        </DialogPortal>
      </Dialog>
    </>
  );
}
