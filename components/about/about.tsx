// src/components/AboutSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  'Java',
  'Python',
  'C',
  'JavaScript',
  'TypeScript',
  'SQL',
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full bg-gradient-to-tl from-black via-gray-900 to-black-900 py-65"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Solid panel with cyan border */}
        <div className="bg-slate-800 rounded-2xl p-10 shadow-2xl border-2 border-cyan-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-cyan-400">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Accent line */}
              <div className="w-20 h-1 bg-cyan-400 rounded"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Insert Text Here
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="inline-block px-4 py-1 bg-cyan-500 text-black rounded-full text-sm font-semibold hover:bg-cyan-400 transition">
                      {skill}
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
