"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "GreenThreads is a web app transforming how people shop by helping users ditch fast fashion for affordable, sustainable alternatives that support local and eco-conscious brands.",
    technologies: ["React", "Flask", "Bootstrap", "Selenium", "BeautifulSoup", "Serp API"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://devpost.com/software/greenthreads",
    imageUrl: "./green.png",
  },
  {
    title: "CargoGuardian",
    description:
      "CargoGuardian is a mobile app that helps logistics companies prevent shipment damage by analyzing real-time data to assess risk, optimize routes, and reduce both financial and environmental costs.",
    technologies: ["React Native", "Spring Boot", "Apple Maps API", "Weather API"],
    githubUrl: "https://github.com/ethanmdo/CargoGuardian",
    liveUrl: "https://devpost.com/software/cargoguardian",
    imageUrl: "./cargo.png",
  },
  {
    title: "VTNexus",
    description:
      "VT Nexus is the all-in-one platform making student org auditions at Virginia Tech faster, smarter, and stress-free.",
    technologies: ["React", "OpenAPI", "SQLite", "Prisma"],
    githubUrl: "https://git.cs.vt.edu/vt-nexus/webapp",
    liveUrl: "https://vt-nexus.uncovercardgame.com/",
    imageUrl: "./VTNexus.png",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-white ">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
