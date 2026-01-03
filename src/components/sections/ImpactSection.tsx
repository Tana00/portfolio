"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ImpactSection() {
  const { impact } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      id="impact"
      aria-labelledby="impact-heading"
    >
      <div className="mb-12">
        <h2
          id="impact-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Proven Impact
        </h2>
        <p className="mt-4 text-text-dim">
          Quantifiable results delivered in production environments.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {impact.map((stat) => (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-lg bg-surface-dark p-8 hover:bg-white/5 transition-colors duration-300 border border-white/5"
          >
            <div className="absolute right-4 top-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-4xl">
                {stat.icon}
              </span>
            </div>
            <p className="text-sm font-medium text-text-dim">{stat.label}</p>
            <p className="mt-2 text-4xl font-bold text-white group-hover:text-primary transition-colors">
              {stat.value}
            </p>
            <p className="mt-4 text-xs text-text-dim/60">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
