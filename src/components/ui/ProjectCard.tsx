"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  imagePosition?: "left" | "right";
  onOpenCaseStudy?: (project: Project) => void;
}

export function ProjectCard({
  project,
  imagePosition = "left",
  onOpenCaseStudy,
}: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageWrapper = (
    <motion.div
      variants={itemVariants}
      className="group relative aspect-4/3 w-full overflow-hidden rounded-lg bg-surface-dark border border-white/5"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 560px"
        quality={75}
        priority={false}
      />

      <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-500" />
    </motion.div>
  );

  const contentWrapper = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-center"
    >
      <motion.div
        variants={itemVariants}
        className="mb-4 flex items-center gap-2 text-primary font-medium text-sm"
      >
        <span>{project.category}</span>
        <span className="h-1 w-1 rounded-full bg-primary" />
        <span>{project.year}</span>
      </motion.div>

      <motion.h3
        variants={itemVariants}
        className="text-3xl font-bold text-white"
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="mt-4 text-lg text-text-dim leading-relaxed"
      >
        {project.description}
      </motion.p>

      <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-white/5 px-3 py-1 text-xs font-medium text-text-dim border border-white/10"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 flex gap-4">
        {/* If you previously used caseStudyUrl, we now use it as a "has case study" flag */}
        {project.caseStudyUrl && onOpenCaseStudy ? (
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="text-white hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            View Case Study
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </button>
        ) : null}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      {imagePosition === "left" ? (
        <>
          {imageWrapper}
          {contentWrapper}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentWrapper}</div>
          <div className="order-1 lg:order-2">{imageWrapper}</div>
        </>
      )}
    </div>
  );
}
