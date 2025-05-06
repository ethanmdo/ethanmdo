// components/VantaHaloBackground.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

type VantaEffect = {
  destroy: () => void;
};

export default function VantaHaloBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    if (vantaRef.current && !effectRef.current) {
      effectRef.current = HALO({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        // size: .75,
        xOffset: 0,
        yOffset: 0,
        // amplitudeFactor: 10,
      });
    }
    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
