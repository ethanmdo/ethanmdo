"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      {/* 🌌 Glowy Background (only in dark mode) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hidden dark:block blur-3xl opacity-40 pointer-events-none">
          {/* <div className="absolute w-96 h-96 bg-teal-500 rounded-full mix-blend-lighten filter blur-3xl top-10 left-1/4 animate-pulse" />
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-lighten filter blur-3xl top-1/2 left-1/2 animate-pulse" /> */}
        </div>
      </div>

      {/* 🧠 Content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-foreground">
        ethanmdo.com
      </h1>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
      </div>
    </section>
  );
}
