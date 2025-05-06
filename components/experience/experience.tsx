// src/components/ExperienceCarousel.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Incoming Software Engineer Intern',
    company: 'Capital One',
    period: 'Jun 2025 – Aug 2025',
    description: 'Small Business Card Team',
  },
  {
    id: 2,
    role: 'AI/ML Research Assistant',
    company: 'Hume Center for National Security and Technology',
    period: 'Sep 2024 – May 2025',
    description: '3D Counter‑UAS Environment Simulations',
  },
  {
    id: 3,
    role: 'Software Engineer Consultant Intern',
    company: 'CapTech Consulting',
    period: 'May 2024 – Aug 2024',
    description: 'Full‑Stack Client Project',
  },
  {
    id: 4,
    role: 'Undergraduate Research Assistant',
    company: 'REACH Lab',
    period: 'Feb 2024 – May 2024',
    description:
      'Co‑Author for Designing Technology to Support the Hospital Classroom: Preliminary Findings',
  },
  {
    id: 5,
    role: 'Intern',
    company: 'Olympus Solutions Inc.',
    period: 'Jun 2023 – Oct 2023',
    description: 'Internal SharePoint Website',
  },
];

export default function ExperienceCarousel() {
  return (
    <div className="">
 
      <HorizontalScrollCarousel />
 
   
      </div>

  );
}

function HorizontalScrollCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Tie scroll progress to this section, from top‐in‐view to bottom‐out‐of‐view
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Measure the total horizontal scroll distance
  const [maxX, setMaxX] = useState(0);
  useEffect(() => {
    function measure() {
      if (innerRef.current) {
        setMaxX(innerRef.current.scrollWidth - window.innerWidth);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Only reference window.innerHeight inside an effect
  const [sectionHeight, setSectionHeight] = useState('0px');
  useEffect(() => {
    if (maxX > 0) {
      setSectionHeight(`${maxX + window.innerHeight}px`);
    }
  }, [maxX]);

  // Map vertical scroll progress [0→1] to horizontal translate [0→-maxX]
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <section
      ref={trackRef}
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <motion.div
          ref={innerRef}
          style={{ x }}
          className="flex gap-4 px-6 items-center h-full"
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex-none w-[400px] h-[300px] flex justify-center"
            >
              <div className="bg-slate-800 border-2 border-cyan-500 rounded-2xl shadow-lg p-6 h-full">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <div className="mt-2 flex items-center text-cyan-300 text-sm gap-2">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="mt-4 text-gray-300 text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
