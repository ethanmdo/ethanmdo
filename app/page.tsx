"use client";

import AboutSection from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/Hero";
import Separator from "@/components/ui/separator";

// import { Button } from "@/components/ui/button";

export default function HomPage() {
  return (
    <main className="relative">

      <Hero />

      <Separator />
      {/* Scroll down to see About */}
   
        <AboutSection />

      <Separator />
      {/* Scroll down to see About */}
      <Experience />
      
    </main>
  );
}
