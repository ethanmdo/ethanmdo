"use client";

import AboutSection from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Separator from "@/components/ui/separator";

// import { Button } from "@/components/ui/button";

export default function HomPage() {
  return (
    <main
      className="relative bg-gradient-to-b from-transparent via-slate-900 via-[40%] to-neutral-950 to-[120%]"
    >
      <section id="home">
        <Hero />
      </section>

      <Separator />

      <section id="about">
        <AboutSection />
      </section>

      <Separator />

      <section id="experience">
        <Experience />
      </section>

      <Separator />

      <section id="projects">
        <Projects />
      </section>

      <Separator />

      <section id="contact">
        <Contact />
      </section>

      <Separator />
    </main>
  );
}
