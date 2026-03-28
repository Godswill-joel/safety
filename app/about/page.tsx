

import Image from "next/image";
import HeroSection from "../home/hero";

export default function AboutSection() {
  return (
    <div>
      <HeroSection
        image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
        tag="Safety Bridge LTD"
        title="Let's"
        highlight="Talk"
        description="We're here to answer your questions and guide you toward the right course for your career."
        watermark="ABOUT"
      />

      <section className="relative w-full flex items-stretch min-h-[480px] overflow-hidden">
        {/* Left: Stacked Images */}
        <div className="relative hidden md:flex flex-col gap-3 w-[380px] shrink-0 z-10 pr-0">
          {/* Top image */}
          <div className="relative w-full h-[220px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
              alt="Steel construction structure with sunlight"
              fill
              className="object-cover"
              sizes="380px"
            />
          </div>
          {/* Bottom image */}
          <div className="relative w-full h-[220px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80"
              alt="Industrial corridor with silhouette"
              fill
              className="object-cover"
              sizes="380px"
            />
          </div>
        </div>

        {/* Center: Tall overlapping portrait image */}
        <div className="relative w-[280px] shrink-0 -mx-0 z-20 self-stretch md:self-auto md:h-auto">
          <div className="relative h-full min-h-[440px]">
            <Image
              src="https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/Aboutscreen_iov49j.webp"
              alt="Female engineer in hard hat smiling"
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          </div>
        </div>

        {/* Right: Black background content panel */}
        <div className="flex-1 bg-black text-white flex flex-col justify-center px-12 py-14 z-10">
          {/* Label */}
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 font-mono">
            About Company
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-tight mb-6 text-white font-serif">
            Quality Safety Supplies For Over 70 Years
          </h2>

          {/* Body */}
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus
            quis vari quam quisque id diam vel faucibus scelerisque eleifend.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-blue-400 hover:bg-blue-600 transition-colors duration-200 text-white font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm group"
            >
              Shop Now
              <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform duration-200">
                ➔
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}