"use client";

import Image from "next/image";

interface HeroSectionProps {
  image: string;
  alt?: string;
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  watermark?: string;
}

export default function HeroSection({
  image,
  alt = "Hero Image",
  tag,
  title,
  highlight,
  description,
  watermark = "hero",
}: HeroSectionProps) {
  return (
    <section className="relative h-[72vh] min-h-[420px] flex items-end pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Watermark */}
      <div className="absolute bottom-0 right-0 font-display text-[clamp(80px,15vw,180px)] font-black italic text-white/[0.04] leading-none select-none pointer-events-none pr-4">
        {watermark}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-7xl w-full mx-auto">
        <div>
          {tag && (
            <p className="font-body text-xl uppercase tracking-[0.25em] text-orange-600 mb-3">
              {tag}
            </p>
          )}

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-5">
            {title}{" "}
            {highlight && (
              <em className="text-orange-600  not-italic">{highlight}</em>
            )}
          </h1>

          {description && (
            <p className="font-body text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}