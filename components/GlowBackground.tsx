'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import { motion, AnimatePresence } from 'framer-motion';

type VantaEffect = { destroy(): void };

export default function GlowBackground() {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setIsAtTop(window.scrollY < 50);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isAtTop) return;

    // 1) Destroy old effect
    effectRef.current?.destroy();

    // 2) Remove any leftover canvases
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    // 3) Re-create with optimized settings
    effectRef.current = HALO({
      el,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      size: 0.5,
      amplitudeFactor: 0.5,
      backgroundColor: resolvedTheme === 'light' ? 0xf5f5f5 : 0x000000,
      baseColor: resolvedTheme === 'light' ? 0xedf2f7 : 0x32ccff,
      xOffset: 0,
      yOffset: 0,
      speed: 0.5,
      scale: 0.8,
      scaleMobile: 0.8,
      points: 5,
      maxDistance: 20,
      showLines: false,
    });

    // Clean up if this component unmounts or scrolls away
    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [resolvedTheme, isAtTop]);

  return (
    <AnimatePresence>
      {isAtTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 -z-10 w-full h-full"
        >
          <div
            ref={containerRef}
            className="w-full h-full"
            style={{ willChange: 'transform' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}