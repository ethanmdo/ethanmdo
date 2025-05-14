// app/components/experience.tsx or src/components/experience.tsx
"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "../card-hover.effect";
import { FaBriefcase, FaRobot, FaLaptopCode } from "react-icons/fa";
import { experienceItems, ExperienceItem } from "../../lib/experience-items";

const getIcon = (iconType: ExperienceItem["iconType"]) => {
  switch (iconType) {
    case "briefcase":
      return <FaBriefcase className="w-5 h-5 text-cyan-300" />;
    case "robot":
      return <FaRobot className="w-5 h-5 text-cyan-300" />;
    case "laptop":
      return <FaLaptopCode className="w-5 h-5 text-cyan-300" />;
    default:
      return <FaBriefcase className="w-5 h-5 text-cyan-300" />;
  }
};

export default function Experience() {
  const itemsWithIcons = experienceItems.map((item: ExperienceItem) => ({
    ...item,
    icon: getIcon(item.iconType),
  }));

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-white">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={itemsWithIcons} />
        </motion.div>
      </motion.div>
    </section>
  );
}
