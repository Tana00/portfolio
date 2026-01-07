"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Variant = "feature" | "grid";

interface ProjectCardProps {
  project: Project;
  imagePosition?: "left" | "right";
  onOpenCaseStudy?: (project: Project) => void;
  variant?: Variant; // ✅ NEW
}

export function ProjectCard({
  project,
  imagePosition = "left",
  onOpenCaseStudy,
  variant = "feature",
}: ProjectCardProps) {
  const isGrid = variant === "grid";

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
      className={[
        "group relative w-full overflow-hidden rounded-lg bg-surface-dark border border-white/5",
        isGrid ? "aspect-16/10" : "aspect-4/3",
      ].join(" ")}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        className={[
          "transition-transform duration-700 group-hover:scale-105",
          // grid cards look better with cover
          isGrid ? "object-cover" : "object-contain",
        ].join(" ")}
        sizes={
          isGrid
            ? "(max-width: 1024px) 100vw, 420px"
            : "(max-width: 1024px) 100vw, 560px"
        }
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
      className={
        isGrid ? "flex flex-1 flex-col p-6" : "flex flex-col justify-center"
      }
    >
      <motion.div
        variants={itemVariants}
        className={
          isGrid
            ? "mb-3 flex items-center justify-between"
            : "mb-4 flex items-center gap-2 text-primary font-medium text-sm"
        }
      >
        <div className="flex items-center gap-2 text-xs font-medium text-primary">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>{project.year}</span>
        </div>

        {isGrid ? (
          <ArrowUpRight className="h-4 w-4 text-text-dim group-hover:text-white transition-colors" />
        ) : null}
      </motion.div>

      <motion.h3
        variants={itemVariants}
        className={
          isGrid
            ? "text-xl font-bold text-white group-hover:text-primary transition-colors"
            : "text-3xl font-bold text-white"
        }
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className={
          isGrid
            ? "mt-3 text-sm leading-relaxed text-text-dim line-clamp-2"
            : "mt-4 text-lg text-text-dim leading-relaxed"
        }
      >
        {project.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className={
          isGrid
            ? "mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5"
            : "mt-6 flex flex-wrap gap-2"
        }
      >
        {project.tags.slice(0, isGrid ? 3 : project.tags.length).map((tag) => (
          <span
            key={tag}
            className={
              isGrid
                ? "text-[10px] font-mono uppercase tracking-wider text-text-dim/70"
                : "rounded bg-white/5 px-3 py-1 text-xs font-medium text-text-dim border border-white/10"
            }
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Feature variant keeps button */}
      {!isGrid && project.caseStudyUrl && onOpenCaseStudy ? (
        <motion.div variants={itemVariants} className="mt-8 flex gap-4">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="text-white hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            View Case Study
            <ArrowUpRight size={14} strokeWidth={2.75} />
          </button>
        </motion.div>
      ) : null}
    </motion.div>
  );

  // ✅ For grid: card should be clickable (open case study)
  if (isGrid) {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-dark border border-white/5 shadow-sm transition-all hover:border-primary/30 hover:shadow-primary/5 hover:shadow-2xl">
        {imageWrapper}
        {contentWrapper}

        {onOpenCaseStudy ? (
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="absolute inset-0 z-10"
            aria-label={`Open case study for ${project.title}`}
          />
        ) : null}
      </article>
    );
  }

  // ✅ Default “feature” layout (current 2-col design)
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
