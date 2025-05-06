// src/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      // when you've scrolled down even a little, flip `scrolled` to true
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const variants = {
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Glowy Background (dark only) */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block blur-3xl opacity-40 pointer-events-none">
          {/* … */}
        </div>
      </div>

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="hero-text"
            initial="enter"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <AnimatedText text="ethanmdo.com" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
