"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Icon } from "../ui/Icon";

export function ContactSection() {
  const { heading, subheading, cta } = portfolioData.contact;

  return (
    <section
      className="relative border-t border-white/5 bg-surface-dark py-24"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-dim">
            {subheading}
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            {cta.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded px-8 py-4 text-base font-bold text-white shadow-lg ${
                  item.variant === "primary"
                    ? "bg-primary hover:bg-blue-600 transition-colors"
                    : "text-text-dim bg-background-dark border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all group"
                }`}
                aria-label={item.label}
                target="_blank"
              >
                <Icon
                  name={item.icon}
                  className="h-5 w-5 group-hover:text-primary transition-colors"
                />
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
