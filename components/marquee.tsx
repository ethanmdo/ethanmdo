// src/components/SkillsMarquee.tsx
'use client';

import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { FiDatabase, FiServer, FiGithub } from "react-icons/fi";
import React from "react";

const skills = [
  { name: "React",       Icon: SiReact },
  { name: "Next.js",     Icon: SiNextdotjs },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "TypeScript",  Icon: SiTypescript },
  { name: "Python",      Icon: SiPython },
  { name: "Node.js",     Icon: SiNodedotjs },
  { name: "GraphQL",     Icon: SiGraphql },
  { name: "Docker",      Icon: SiDocker },
  { name: "Prisma",      Icon: SiPrisma },
  { name: "Databases",   Icon: FiDatabase },
  { name: "Backend",     Icon: FiServer },
  { name: "GitHub",      Icon: FiGithub },
];

const half = Math.ceil(skills.length / 2);
const firstRow = skills.slice(0, half);
// const secondRow = skills.slice(half);

const SkillCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <figure
    className={cn(
      "flex flex-col items-center justify-center gap-2",
      "w-32 h-32 mx-2 cursor-pointer rounded-lg border",
      "border-gray-50/[.1] bg-black hover:bg-gray-50/[.15]",
      "text-white"
    )}
  >
    <Icon className="text-3xl" />
    <figcaption className="text-sm font-medium">{name}</figcaption>
  </figure>
);

export function SkillsMarquee() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden pb-30">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee> */}

      {/* fades at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-" />
    </div>
  );
}
