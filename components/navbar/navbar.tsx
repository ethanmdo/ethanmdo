'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import NavButton from '../ui/nav-button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-50 transition-[top] duration-500 ease-in-out',
        scrolled ? 'top-4' : 'top-0'
      )}
    >
      <div
        style={{
          willChange: 'transform, width, padding, background-color',
          boxShadow: scrolled
            ? 'rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, ' +
              'rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, ' +
              'rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset'
            : 'none'
        }}
        className={cn(
          'mx-auto flex items-center justify-between transition-[transform,width,padding,background-color] duration-500 ease-in-out',
          scrolled
            ? // Scrolled state: white/80 pill in light, Oklab pill in dark
              'translate-y-5 w-[60%] py-[12px] px-[24px] ' +
              'bg-[oklab(0.145_0_0_/_0.8)] text-white ' +
              'backdrop-blur-[10px] rounded-[2rem]'
            : // Top state: fully transparent, text adapts to theme
              'translate-y-0 w-[80%] py-4 px-[12px] ' +
              'bg-transparent text-white ' +
              'backdrop-blur-0 rounded-[2rem]'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-white font-mono"
        >
          ethanmdo
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-white">
          <Link href="/">Home</Link>
          <Link href="/projects">About</Link>
          <Link href="/contact">Experience</Link>
        </nav>

        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          <NavButton />
        </div>
      </div>
    </header>
  );
}
