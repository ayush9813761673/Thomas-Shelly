import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  opacity?: number; // Faint, subtle luxury opacity (e.g., 0.08 to 0.15)
  speed?: number; // Strength of parallax effect (usually negative, e.g., -0.15 to -0.3)
  className?: string;
  blendMode?: string; // Tailwind class like mix-blend-luminosity or overlay
}

export default function ParallaxBackground({
  imageUrl,
  opacity = 0.12,
  speed = -0.18,
  className = '',
  blendMode = 'mix-blend-luminosity'
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track the scrolling of this specific section container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Map the scroll progress (0 when entering screen, 1 when exiting screen) to pixel offset
  // We use 120px translation offset with a 115% scale to prevent edge exposure
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -100}px`, `${speed * 100}px`]
  );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      <motion.div
        className={`absolute inset-0 bg-cover bg-center scale-115 ${blendMode}`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          y: translateY,
          opacity: opacity
        }}
      />
    </div>
  );
}
