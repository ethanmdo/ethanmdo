// src/components/About.tsx
"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { DragCards } from "../ui/DragCards";
import Example from "../ui/encrypt";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Left: LinkPreview text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 space-y-8 ">
        <span className="text-neutral-400 text-xl md:text-3xl max-w-3xl ">
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
        <Example />
      </div>

      {/* Right: draggable cards */}
      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
        <DragCards />
      </div>
    </section>
  );
}
