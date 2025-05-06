'use client';

import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn("relative w-full h-1 overflow-hidden", className)}>
      <div
        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </div>
  );
}
