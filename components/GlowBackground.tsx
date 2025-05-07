// components/GlowBackground.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

type VantaEffect = { destroy(): void };

export default function GlowBackground() {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 1) Destroy old effect
    effectRef.current?.destroy();

    // 2) Remove any leftover canvases
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    // 3) Re-create with the new backgroundColor
    effectRef.current = HALO({
      el,
      THREE,
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      size: .75,
      amplitudeFactor: .5,
      backgroundColor:
        resolvedTheme === 'light' ?  0xf5f5f5 : 0x000000,
      baseColor:
        resolvedTheme === 'light' ? 0xedf2f7 : 0x32ccff,
      xOffset: 0,
      yOffset: 0,
    });

    // Clean up if this component unmounts
    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
