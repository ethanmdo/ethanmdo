// src/components/Hero.tsx
"use client";

import AnimatedText from "@/components/AnimatedText";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden"
      id="hero"
    >
      {/* Glowy Background (dark only) */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block blur-3xl opacity-40 pointer-events-none">
          {/* ... */}
        </div>
      </div>

      <AnimatedText text="ethanmdo.com" />
    </section>
  );
}
