"use client";

import { projects } from "../lib/data";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="flex flex-wrap gap-10"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imageSrc={project.imageSrc}
            key={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
