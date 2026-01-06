import type { IconName } from "@/components/Icons";

export interface Skill {
  name: string;
  icon: IconName;
}

export interface Tag {
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  year: number;
  description: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  tags: string[];
  caseStudyUrl?: string;
  caseStudy: {
    challengeText?: string;
    achievements?: Array<{
      value: string;
      label: string;
      trendIcon?: IconName;
    }>;
    images?: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
    closingText?: string;
    liveUrl?: string;
    architecture?: ArchitectureData;
  };
}

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  description: string;
  icon: IconName;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    description: string;
    email: string;
    availability: string;
    resumeUrl: string;
  };
  navigation: {
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  hero: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    description: string;
    cta: Array<{
      label: string;
      href: string;
      variant: "primary" | "secondary";
      icon?: IconName;
    }>;
  };
  skills: Skill[];
  impact: StatCard[];
  projects: Project[];
  contact: {
    heading: string;
    subheading: string;
    cta: string;
    ctaUrl: string;
  };
  footer: {
    copyright: string;
    socials: Array<{
      name: string;
      href: string;
    }>;
  };
  chat: {
    greeting: string;
    suggestedQuestions: string[];
  };
}

export type ArchitectureNodeId = string;

export type ArchitectureNode = {
  id: ArchitectureNodeId;
  title: string;
  subtitle?: string;
  icon?: IconName; // uses Icon component
  iconColorClass?: string;
  hoverBorderClass?: string;
  tooltip?: {
    title?: string;
    body: string;
  };
};

export type ArchitectureEdge = {
  from: ArchitectureNodeId;
  to: ArchitectureNodeId;
  label?: string; // "JSON/HTTPS"
  gradientClass?: string;
  ping?: boolean; // show little ping dot animation
};

export type ArchitecturePipelineLayout = {
  type: "pipeline";
  order: ArchitectureNodeId[]; // node ids in order
};

export type ArchitectureData = {
  badgeLabel?: string; // "System Architecture"
  layout: ArchitecturePipelineLayout;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
};
