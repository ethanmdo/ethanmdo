"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  subtitle?: string;
  className?: string;
}

export default function AnimatedText({
  text,
  subtitle = "Welcome to My Website",
  className = "",
}: AnimatedTextProps) {
  const [subtitleText, setSubtitleText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    // start subtitle typing (and reveal cursor) after title fade-in completes
    const startTypingTimer = setTimeout(() => {
      setShowCursor(true);
      let idx = 0;
      const interval = setInterval(() => {
        if (idx <= subtitle.length) {
          setSubtitleText(subtitle.slice(0, idx));
          idx++;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 100);
    }, 1000); // title fade-in: 0.2s delay + 0.8s duration = 1s

    return () => clearTimeout(startTypingTimer);
  }, [subtitle]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Fade‑in main title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
      >
        {text}
      </motion.h1>

      {/* Typing subtitle + reserved cursor space */}
      <p className="mt-4 text-xl sm:text-2xl text-foreground/80 font-medium">
        {subtitleText}
        <span
          className={cn(
            "inline-block w-1 h-7 ml-1",
            !showCursor || typingDone
              ? "invisible"
              : "bg-foreground animate-pulse"
          )}
        />
      </p>
    </div>
  );
}
