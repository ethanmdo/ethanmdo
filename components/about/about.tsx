import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
];

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-16 px-4"
    >
      <Card className="overflow-hidden">
        <div className="md:flex items-center">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center p-6">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-indigo-500"
            />
          </div>

          {/* Content */}
          <CardContent className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I’m a full-stack developer with a passion for building scalable web
              applications and interactive user experiences. With experience in
              React, Next.js, and Node.js, I love turning ideas into reality and
              continually learning new technologies.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.section>
  );
}
