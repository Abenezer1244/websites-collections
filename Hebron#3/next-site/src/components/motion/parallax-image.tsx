"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
  fill?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.15,
  fill = true,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * (speed / 0.15)]);

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden ${containerClassName ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          className={className}
          fill={fill}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${containerClassName ?? ""}`}
    >
      <motion.div style={{ y }} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          className={className}
          fill={fill}
        />
      </motion.div>
    </div>
  );
}
