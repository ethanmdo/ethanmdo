// app/components/experience.tsx or src/components/experience.tsx
import { HoverEffect } from "@/components/card-hover.effect";
import { FaBriefcase, FaRobot, FaLaptopCode } from "react-icons/fa";


export function Experience() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-20 px-8 md:px-25 min-h-screen ">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Experience</h2>
      <HoverEffect items={experiences} />
    </div>
  );
}

export interface ExperienceItem {
  company: string;
  title: string;
  description: string;
  link: string;
  date: string;
  icon?: React.ReactNode;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Capital One",
    title: "Software Engineering Intern",
    description:
      "Small Business Cards Team",
    link: "https://www.capitalone.com",
    date: "May 2025 – Aug 2025",
    icon: <FaBriefcase className="w-5 h-5 text-cyan-300" />,
  },
  {
    company: "Hume Center",
    title: "AI/ML Undergraduate Researcher",
    description:
      "3D Counter-UAS Environment Simulations",
    link: "https://hume.vt.edu/",
    date: "Sep 2024 – May 2025",
    icon: <FaLaptopCode className="w-5 h-5 text-cyan-300" />,
  },
  {
    company: "CapTech Consulting",
    title: "Software Engineer Consultant Intern",
    description:
      "Full‑Stack Client Project",
    link: "https://www.captechconsulting.com/",
    date: "May 2024 – Aug 2024",
    icon: <FaRobot className="w-5 h-5 text-cyan-300" />,
  },
  {
    company: "Reach Lab",
    title: "Undergraduate Research Assistant",
    description:
      "Co‑Author for Designing Technology to Support the Hospital Classroom: Preliminary Findings",
    link: "https://reachlabcs.com/",
    date: "Feb 2024 – May 2024",
    icon: <FaBriefcase className="w-5 h-5 text-cyan-300" />,
  },
  {
    company: "Olympus Solutions",
    title: "Technology Intern",
    description:
      "Internal SharePoint Website",
    link: "https://www.olympussolutionsinc.com/",
    date: "Sep 2024 – Dec 2024",
    icon: <FaRobot className="w-5 h-5 text-cyan-300" />,
  },
];


export default Experience;