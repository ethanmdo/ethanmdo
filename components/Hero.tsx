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
