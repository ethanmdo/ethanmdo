"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({
  text,
  className = "",
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const speed = 100;          // ms per character
    let idx = 0;

    const interval = setInterval(() => {
      idx++;
      if (idx <= text.length) {
        // always safe, never undefined
        setDisplayText(text.substring(0, idx));
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded-2xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
          {displayText}
          <span
            className={cn(
              "inline-block w-1 h-7 ml-1",
              showCursor ? "bg-white animate-pulse" : "invisible"
            )}
          />
        </h1>
      </div>
    </div>
  );
}
