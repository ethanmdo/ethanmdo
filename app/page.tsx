"use client";

import AboutSection from "@/components/about/about";
import AnimatedText from "../components/AnimatedText";
import Hero from "@/components/Hero";
import Separator from "@/components/ui/separator";

// import { Button } from "@/components/ui/button";

export default function HomPage() {
  return (
    <main className="relative">

      <Hero />

      <Separator />
      {/* Scroll down to see About */}
      <section id="about" className="py-16 px-4 bg-black min-h-[60vh]">
        <AboutSection />
      </section>
    </main>
  );
}
