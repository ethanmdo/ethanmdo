// src/components/About.tsx
"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { DragCards } from "../ui/DragCards";
import { SkillsMarquee } from "../marquee";
import Social from "../social";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-[70vh]">
        {/* Left: LinkPreview text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 space-y-8"
        >
          <span className="text-neutral-400 text-xl md:text-3xl max-w-3xl">
            My name is{" "}
            <LinkPreview url="https://ethanmdo.com" className="font-bold">
              Ethan Do
            </LinkPreview>
            , and I am a current Third‑Year Computer Science student at{" "}
            <LinkPreview url="https://www.vt.edu" className="font-bold">
              Virginia Tech
            </LinkPreview>
            .
          </span>
          <Social />
        </motion.div>

        {/* Right: draggable cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-full relative overflow-hidden"
        >
          <DragCards />
        </motion.div>
      </section>

      {/* ↓ Marquee of skills ↓ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <SkillsMarquee />
      </motion.div>
    </>
  );
}
