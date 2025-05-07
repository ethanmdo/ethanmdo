// src/components/TimelineDemo.tsx
'use client';


import React from 'react';
import { Timeline } from '@/components/ui/timeline';


export function TimelineDemo() {
  const data = [
    {
      title: (
        <div className="space-y-1 ">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Capital One
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Jun 2025 – Aug 2025 &middot; Software Engineer Intern
          </p>
        </div>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Small Business Card Team
          </p>
          <div className="grid grid-cols-2 gap-4">
          <img
                src={`/cap1.gif`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Capital One GIF'
              />
                  <img
                src={`/reach.png`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Capital One GIF'
              />
    
          </div> 
        </div>
      ),
    },
    {
      title: (
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Hume Center for National Security &amp; Technology
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Sep 2024 – May 2025 &middot; AI/ML Research Assistant
          </p>
        </div>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
          3D Counter-UAS Environment Simulations
          </p>
          <div className="grid grid-cols-2 gap-4">
          <img
                src={`/nightwatch.png`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Nightwatch GIF'
              />
                  <img
                src={`/poster.png`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Nightwatch GIF'
              />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            CapTech Consulting
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            May 2024 – Aug 2024 &middot; Software Engineer Consultant Intern
          </p>
        </div>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
          Full-Stack Client Project
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((n) => (
              <img
                key={n}
                src={`https://assets.aceternity.com/templates/startup-${n}.webp`}
                alt={`screenshot ${n}`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            REACH Lab
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Feb 2024 – May 2024 &middot; Undergraduate Research Assistant
          </p>
        </div>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Co‑authored <em>Designing Technology to Support the Hospital
            Classroom: Preliminary Findings</em>.
          </p>
          <div className="grid grid-cols-2 gap-4">
  
              <img
                src={`/reach.png`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Capital One GIF'
              />
                  <img
                src={`/article.png`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
                alt='Capital One GIF'
              />
    
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Olympus Solutions Inc.
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Jun 2023 – Oct 2023 &middot; Intern
          </p>
        </div>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
          Internal SharePoint Website
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((n) => (
              <img
                key={n}
                src={`https://assets.aceternity.com/templates/startup-${n}.webp`}
                alt={`screenshot ${n}`}
                width={500}
                height={500}
                className="h-70 w-full rounded-lg object-cover shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden ">
      <Timeline data={data.map(({ title, content }) => ({ title, content }))} />
    </div>
  );
}

export default function Experience() {
  return <TimelineDemo />;
}
