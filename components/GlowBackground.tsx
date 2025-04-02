"use client";

import { useEffect, useRef } from "react";

type Blob = {
  id: string;
  el: HTMLDivElement;
  vx: number;
  vy: number;
  x: number;
  y: number;
  lightColor: string;
  darkColor: string;
};

export default function GlowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const isDarkMode = () =>
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  useEffect(() => {
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
        { id: "teal", light: "#5eead4", dark: "#0f766e" },   // was: #ccfbf1
        { id: "pink", light: "#f9a8d4", dark: "#9d174d" },   // was: #fce7f3
        { id: "blue", light: "#60a5fa", dark: "#1e40af" },   // was: #e0f2fe
      ];
      

    const blobs: Blob[] = colors.map((c) => {
      const el = document.createElement("div");
      el.className =
        "absolute w-[360px] h-[360px] rounded-full blur-[160px] opacity-60 pointer-events-none transition-transform duration-500 ease-out";
      el.style.backgroundColor = isDarkMode() ? c.dark : c.light;

      const x = Math.random() * (window.innerWidth - 360);
      const y = Math.random() * (window.innerHeight - 360);

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      container.appendChild(el);

      return {
        id: c.id,
        el,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        x,
        y,
        lightColor: c.light,
        darkColor: c.dark,
      };
    });

    blobsRef.current = blobs;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const mouse = mouseRef.current;

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x <= 0 || blob.x >= window.innerWidth - 360) blob.vx *= -1;
        if (blob.y <= 0 || blob.y >= window.innerHeight - 360) blob.vy *= -1;

        const dx = blob.x + 180 - mouse.x;
        const dy = blob.y + 180 - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const avoidRadius = 160;

        if (dist < avoidRadius) {
          const angle = Math.atan2(dy, dx);
          blob.x += Math.cos(angle) * 2.5;
          blob.y += Math.sin(angle) * 2.5;
          blob.el.style.transform = "scale(1.05)";
        } else {
          blob.el.style.transform = "scale(1)";
        }

        blob.el.style.left = `${blob.x}px`;
        blob.el.style.top = `${blob.y}px`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      blobs.forEach((b) => container.removeChild(b.el));
      blobs.length = 0;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden"
    />
  );
}
