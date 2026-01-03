export interface Skill {
  name: string;
  icon: string;
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
      trendIcon?: "arrow_upward" | "arrow_downward";
    }>;
    images?: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
    closingText?: string;
    liveUrl?: string;
  };
}

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
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
      icon?: string;
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
