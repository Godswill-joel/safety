/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Safety Glasses",
    image:
      "https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/shop-1_r8b0ob.webp",
    alt: "Worker wearing safety glasses and hard hat",
  },
  {
    id: 2,
    name: "Hard Hats",
    image:
      "https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/safetyheadshop_rztmui.webp",
    alt: "Hard hat hanging on industrial hook",
  },
  {
    id: 3,
    name: "High Vis",
    image:
      "https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/shop3_dyjbjp.webp",
    alt: "Worker in high visibility vest on construction site",
  },
  {
      id: 5,
      name: "Protective Equipment",
      image:
      "https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/shop4_pb6cmr.webp",
      alt: "Bucket of protective equipment and tools",
    },
    {
      id: 4,
      name: "Fall Protection",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      alt: "Fall protection harness and carabiner clips",
    },
];

export default function ShopByCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 300;
    container.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    );
  };

  return (
    <section className="w-full py-10 px-6 md:px-12 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          Shop By Categories
        </h2>
        {/* Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "border-gray-400 text-gray-700 hover:bg-gray-100"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
              canScrollRight
                ? "border-gray-400 text-gray-700 hover:bg-gray-100"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-6" />

      {/* Cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#"
            className="relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-[340px] md:h-[380px] overflow-hidden group cursor-pointer rounded-sm"
          >
            {/* Image */}
            <Image
              src={cat.image}
              alt={cat.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
            />

            {/* Dark overlay gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-bold text-lg leading-tight drop-shadow-md">
                {cat.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}