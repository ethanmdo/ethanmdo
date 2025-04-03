"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  subtitle?: string;
  className?: string;
}

export default function AnimatedText({
  text,
  subtitle = "Welcome To My Website",
  className = "",
}: AnimatedTextProps) {
  const [subtitleText, setSubtitleText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Start typing effect after main title animation (0.8s + 0.2s delay)
    const timer = setTimeout(() => {
      setShowSubtitle(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= subtitle.length) {
          setSubtitleText(subtitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust speed of typing here

      return () => clearInterval(interval);
    }, 1000); // Total time of main animation + small buffer

    return () => clearTimeout(timer);
  }, [subtitle]);

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-foreground ${className}`}
      >
        {text}
      </motion.h1>
      {showSubtitle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-xl sm:text-2xl text-foreground/80"
        >
          {subtitleText}
        </motion.div>
      )}
    </div>
  );
}
