"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch (next-themes workaround)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-semibold text-primary">
          ethanmdo
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
