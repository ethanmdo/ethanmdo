import { ReactNode } from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  link: string;
  date: string;
  iconType: "briefcase" | "robot" | "laptop";
  icon?: ReactNode;
}

export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    company: "Capital One",
    description: "Small Business Cards Team",
    link: "https://www.capitalone.com",
    date: "May 2025 – Aug 2025",
    iconType: "briefcase",
  },
  {
    title: "Research Assistant",
    company: "Hume Center",
    description: "3D Counter-UAS Environment Simulations",
    link: "https://hume.vt.edu/",
    date: "Sep 2024 – May 2025",
    iconType: "laptop",
  },
  {
    title: "Software Engineering Intern",
    company: "CapTech",
    description: "Full‑Stack Client Project",
    link: "https://www.captechconsulting.com/",
    date: "May 2024 – Aug 2024",
    iconType: "robot",
  },
  {
    title: "Research Assistant",
    company: "REACH Lab",
    description: "Co‑Author for Designing Technology to Support the Hospital Classroom: Preliminary Findings",
    link: "https://reachlabcs.com/",
    date: "Feb 2024 – May 2024",
    iconType: "briefcase",
  },
  {
    title: "Software Engineering Intern",
    company: "Olympus Solutions",
    description: "Internal SharePoint Website",
    link: "https://www.olympussolutionsinc.com/",
    date: "Sep 2024 – Dec 2024",
    iconType: "robot",
  },
]; 