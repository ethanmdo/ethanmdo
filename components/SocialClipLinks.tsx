// src/components/SocialClipLinks.tsx
'use client';

import React from 'react';
import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiYoutube,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { useAnimate } from 'framer-motion';

/**
 * Renders three rows:
 *  • LinkedIn / GitHub
 *  • TikTok / X / Instagram / YouTube
 *  • Spotify / Facebook / Email
 */
export function SocialClipLinks() {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      {/* Row 1 */}
      <div className="grid grid-cols-2 divide-x divide-white border border-white">
        <LinkBox Icon={SiLinkedin} href="https://linkedin.com/in/ethanmdo" />
        <LinkBox Icon={SiGithub} href="https://github.com/your‑ethanmdo" />
      </div>


      {/* Row 3 */}
      <div className="grid grid-cols-3 divide-x divide-white border border-white">
      <LinkBox Icon={SiInstagram} href="https://instagram.com/ethanmdo" />
        <LinkBox Icon={SiYoutube} href="https://youtube.com/ethanmdo" />
        <LinkBox Icon={MdEmail} href="mailto:ethando@gmail.com" />
      </div>
    </div>
  );
}

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type LinkBoxProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

function LinkBox({ Icon, href }: LinkBoxProps) {
  const [scope, animate] = useAnimate();

  function getNearestSide(e: React.MouseEvent) {
    const box = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
    const distances = [
      { side: 'left', proximity: Math.abs(box.left - e.clientX) },
      { side: 'right', proximity: Math.abs(box.right - e.clientX) },
      { side: 'top', proximity: Math.abs(box.top - e.clientY) },
      { side: 'bottom', proximity: Math.abs(box.bottom - e.clientY) },
    ];
    distances.sort((a, b) => a.proximity - b.proximity);
    return distances[0].side as keyof typeof ENTRANCE_KEYFRAMES;
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] }, { duration: 0.3 });
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] }, { duration: 0.3 });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      {/* Base icon */}
      <Icon className="text-2xl sm:text-3xl md:text-4xl text-white" />

      {/* Overlay sliding clip */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-2xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
}
