"use client";

import AboutSection from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/Hero";

import Separator from "@/components/ui/separator";


// import { Button } from "@/components/ui/button";

export default function HomPage() {
  return (
    <main className="relative bg-gradient-to-b from-transparent via-slate-900 via-[40%] to-neutral-950 to-[90%]

">

      <Hero />

      <Separator />
      {/* Scroll down to see About */}
   
        <AboutSection />

      <Separator />
      {/* Scroll down to see About */}
      <Experience />

      <Separator />

      

      
    </main>
  );
}
