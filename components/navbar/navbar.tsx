"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import NavButton from "../ui/nav-button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className={cn(
          "relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 group",
          activeSection === "home" && "text-blue-400"
        )}
      >
        <span className="relative z-10">Home</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className={cn(
          "relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 group",
          activeSection === "about" && "text-blue-400"
        )}
      >
        <span className="relative z-10">About</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className={cn(
          "relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 group",
          activeSection === "experience" && "text-blue-400"
        )}
      >
        <span className="relative z-10">Experience</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className={cn(
          "relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 group",
          activeSection === "projects" && "text-blue-400"
        )}
      >
        <span className="relative z-10">Projects</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      </button>
    </>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 transition-[top] duration-500 ease-in-out",
        scrolled ? "top-4" : "top-0"
      )}
    >
      <div
        style={{
          willChange: "transform, width, padding, background-color",
          boxShadow: scrolled
            ? "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, " +
              "rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, " +
              "rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
            : "none",
        }}
        className={cn(
          "mx-auto flex items-center justify-between transition-[transform,width,padding,background-color] duration-500 ease-in-out",
          scrolled
            ? // Scrolled state: white/80 pill in light, Oklab pill in dark
              "translate-y-5 w-[60%] py-[12px] px-[24px] " +
                "bg-[oklab(0.145_0_0_/_0.8)] text-white " +
                "backdrop-blur-[10px] rounded-[2rem]"
            : // Top state: fully transparent, text adapts to theme
              "translate-y-0 w-[80%] py-4 px-[12px] " +
                "bg-transparent text-white " +
                "backdrop-blur-0 rounded-[2rem]"
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-semibold text-white font-mono hover:opacity-80 transition-opacity"
        >
          ethanmdo
        </button>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-white">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          <NavButton />
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-[oklab(0.145_0_0_/_0.95)] backdrop-blur-[10px] rounded-2xl border border-slate-800 shadow-lg md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-mono text-white">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
