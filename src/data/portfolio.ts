import type { PortfolioData } from "@/types/portfolio";
import { recruiterQuestions } from "@/data/recruiterQuestions";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Happiness Oyinlola",
    title: "Senior Frontend Developer",
    headline: "Building user-centric, scalable web applications",
    description:
      "I am Happiness Oyinlola, a Senior Frontend Developer bridging the gap between sophisticated design and high-performance engineering.",
    email: "happinessblgn0@gmail.com",
    availability: "Available for new opportunities",
  },
  navigation: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Impact", href: "#impact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    badge: "Available for new opportunities",
    heading: "Building",
    headingGradient: "user-centric",
    subheading: ", scalable web applications.",
    description:
      "I am Happiness Oyinlola, a Senior Frontend Developer bridging the gap between sophisticated design and high-performance engineering.",
    cta: [
      {
        label: "View Selected Projects",
        href: "#work",
        variant: "primary",
        icon: "arrow_forward",
      },
      {
        label: "GitHub",
        href: "https://github.com/Tana00",
        variant: "secondary",
        icon: "github",
      },
    ],
  },
  skills: [
    { name: "JavaScript", icon: "code_blocks" },
    { name: "TypeScript", icon: "braces" },
    { name: "React", icon: "component" },
    { name: "Next.js", icon: "layers" },
    { name: "Tailwind", icon: "wind" },
    { name: "GraphQL", icon: "database" },
  ],
  impact: [
    {
      id: "error-reduction",
      label: "Error Reduction",
      value: "90%",
      description: "Achieved via strict TypeScript adoption.",
      icon: "trending_up",
    },
    {
      id: "conversion-boost",
      label: "Conversion Boost",
      value: "30%",
      description: "Through optimized load times & UX.",
      icon: "bolt",
    },
    {
      id: "experience",
      label: "Experience",
      value: "5+ Yrs",
      description: "Leading frontend architecture.",
      icon: "award",
    },
    {
      id: "architecture",
      label: "Architecture",
      value: "Scalable",
      description: "Micro-frontends & Monorepos.",
      icon: "scaling",
    },
  ],
  projects: [
    {
      id: "clouddley-platform",
      title: "Clouddley SaaS Cloud Management Platform",
      category: "SaaS / Cloud",
      year: 2024,
      description:
        "Led frontend development for Clouddley — a SaaS cloud management platform helping startups deploy and manage apps across AWS, Azure, and GCP. Built with React, Next.js, Tailwind CSS, MUI, and Redux, focusing on performance, reusable UI, and smooth onboarding.",
      image: {
        src: "/projects/clouddley-deployed-apps.png",
        alt: "SaaS dashboard UI for cloud management",
        caption: "Deployed Apps",
      },
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "Redux"],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Build a fast, intuitive cloud management dashboard that supports multi-cloud workflows (AWS/Azure/GCP), improves onboarding, and reduces user friction across authentication, deployments, and infrastructure provisioning.",
        achievements: [
          {
            value: "30%",
            label: "Conversion Boost",
            trendIcon: "arrow_up",
          },
          {
            value: "90%",
            label: "Login Error Reduction",
            trendIcon: "arrow_down",
          },
          {
            value: "30%",
            label: "Faster Onboarding",
            trendIcon: "arrow_up",
          },
          {
            value: "20%",
            label: "User Engagement Uplift",
            trendIcon: "arrow_up",
          },
          {
            value: "30%",
            label: "Dev Time Reduced",
            trendIcon: "arrow_down",
          },
          {
            value: "25%",
            label: "Maintainability Improved",
            trendIcon: "arrow_up",
          },
        ],
        images: [
          {
            src: "/projects/clouddley-app-overview.png",
            alt: "SaaS dashboard UI for cloud management",
            caption: "Deployed Apps",
          },
          {
            src: "/projects/clouddley-new-app.png",
            alt: "Cloud deployment flow interface",
            caption: "New App Deployment",
          },
        ],
        closingText:
          "Implemented NextAuth social login (Google/GitHub), GitHub/Bitbucket deployment flows, database + Redis creation UI, REST API integration with Axios + React Hook Form validation, reusable component patterns, performance optimization, and a testing baseline using React Testing Library.",
        liveUrl: "https://clouddley.com/",
        architecture: {
          badgeLabel: "System Architecture",
          layout: {
            type: "pipeline",
            order: ["client", "api", "cloud"],
          },
          nodes: [
            {
              id: "client",
              title: "Client (React)",
              subtitle: "Next.js Frontend",
              icon: "monitor_smartphone",
              iconColorClass: "text-blue-400",
              hoverBorderClass: "hover:border-primary/50",
              tooltip: {
                title: "State Management Strategy",
                body: "Redux Toolkit for global state, local component state for UI interactions.",
              },
            },
            {
              id: "api",
              title: "API Gateway",
              subtitle: "RESTful Services",
              icon: "braces",
              iconColorClass: "text-purple-400",
              hoverBorderClass: "hover:border-purple-500/50",
              tooltip: {
                title: "API Optimization",
                body: "Edge caching & rate limiting implemented to handle high concurrent requests.",
              },
            },
            {
              id: "cloud",
              title: "Cloud Services",
              subtitle: "AWS / GCP / Azure",
              icon: "cloud",
              iconColorClass: "text-green-400",
            },
          ],
          edges: [
            {
              from: "client",
              to: "api",
              label: "JSON/HTTPS",
              gradientClass: "from-blue-500/50 to-purple-500/50",
              ping: true,
            },
            {
              from: "api",
              to: "cloud",
              label: "Query",
              gradientClass: "from-purple-500/50 to-green-500/50",
            },
          ],
        },
      },
    },

    {
      id: "settl-me-marketplace",
      title: "Settl.me Lifestyle Marketplace + Merchant Dashboard",
      category: "Marketplace / Consumer",
      year: 2022,
      description:
        "Built a consumer lifestyle web app for food ordering and service booking, plus a responsive merchant dashboard for uploads and order tracking. Focused on real-time updates, payments, monitoring, experimentation, and safe rollouts.",
      image: {
        src: "/projects/settl-hero.png",
        alt: "Marketplace web app interface with dashboards",
        caption: "Hero Section",
      },
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "WebSockets",
        "Sentry",
      ],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Deliver a consumer ordering + booking experience with real-time notifications, reliable payments, and a merchant dashboard that improves operational efficiency—while supporting rapid iteration through A/B testing and feature flags.",
        achievements: [
          {
            value: "20%",
            label: "Merchant Productivity Improvement",
            trendIcon: "arrow_up",
          },
          {
            value: "↑",
            label: "Live WebSocket Notifications",
            trendIcon: "arrow_up",
          },
          {
            value: "↑",
            label: "Feature Flags for Safe Rollouts",
            trendIcon: "arrow_up",
          },
        ],
        images: [
          {
            src: "/projects/settl-merchant-dashboard.png",
            alt: "Merchant dashboard UI for order tracking",
            caption: "Merchant Dashboard",
          },
          {
            src: "/projects/settl-merchant-signup.png",
            alt: "Merchant signup flow interface",
            caption: "Merchant Signup",
          },
        ],
        closingText:
          "Integrated multi-channel payments (card/transfer/wallet), implemented WebSocket notifications, added Sentry monitoring, established GTM-oriented frontend workflow (SEO + A/B testing), and built unit/integration tests using Jest + React Testing Library.",
        liveUrl: "https://settl.me/",
      },
    },

    {
      id: "optisource-accounting-modernization",
      title: "Accounting Platform Modernization (ASP.NET → React)",
      category: "Enterprise / FinTech",
      year: 2021,
      description:
        "Spearheaded the conversion of a widely used ASP.NET accounting product into a modern React application, elevating UI/UX and performance. Also led web redesign efforts and improved deployment reliability through CI/CD.",
      image: {
        src: "/projects/optisource-hero.png",
        alt: "Modern analytics UI representing accounting software redesign",
        caption: "Hero Section",
      },
      tags: [
        "React",
        "JavaScript",
        "CI/CD",
        "GitHub Actions",
        "Netlify",
        "Vercel",
        "Lighthouse",
      ],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Modernize a legacy accounting UI into a performant React experience while improving deployment consistency and pushing measurable performance gains through auditing and optimization.",
        achievements: [
          {
            value: "✓",
            label: "Legacy UI Modernized",
            trendIcon: "arrow_down",
          },
          {
            value: "✓",
            label: "CI/CD Pipelines Implemented",
            trendIcon: "arrow_down",
          },
          {
            value: "✓",
            label: "Performance Improved via Lighthouse",
            trendIcon: "arrow_down",
          },
        ],
        images: [
          {
            src: "/projects/optisource-about-us.png",
            alt: "Company about us page redesign concept",
            caption: "About Us Page",
          },
          {
            src: "/projects/optisource-services.png",
            alt: "Services page redesign concept",
            caption: "Services Page",
          },
        ],
        closingText:
          "Delivered a modern React-based UI, established deployment pipelines using GitHub Actions with Netlify/Vercel, improved WordPress sites (Divi/Elementor), and ran Lighthouse-driven performance initiatives to boost load time and overall efficiency.",
        liveUrl: "https://www.optisourcetech.com/",
      },
    },

    {
      id: "nba-word-addin-stamp-seal",
      title: "Nigerian Bar Association Word Add-in (Stamp & Seal)",
      category: "LegalTech",
      year: 2021,
      description:
        "Developed a Microsoft Word add-in that automates seal and stamp application for legal documents, improving processing speed and accuracy while supporting compliance requirements.",
      image: {
        src: "/projects/stamp-n-seal-login.png",
        alt: "Legal document workflow concept for Word Add-in",
        caption: "Login Interface",
      },
      tags: ["React", "JavaScript", "Office JavaScript API", "HTML", "CSS"],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Create a Word add-in workflow that applies stamp/seal automatically with high reliability, improving document turnaround time and accuracy while meeting legal and regulatory expectations.",
        achievements: [
          {
            value: "70%",
            label: "Faster & More Accurate Processing",
            trendIcon: "arrow_up",
          },
          {
            value: "✓",
            label: "Compliance-Driven Automation",
            trendIcon: "arrow_down",
          },
        ],
        images: [
          {
            src: "/projects/stamp-n-seal-overview.png",
            alt: "Stamp application workflow interface",
            caption: "Stamp Application Workflow",
          },
          {
            src: "/projects/stamp-n-seal-affix-stamp.png",
            alt: "Document ready for stamping interface",
            caption: "Document Ready for Stamping",
          },
        ],
        closingText:
          "Built the add-in using Office JavaScript APIs with a React UI, automating repetitive stamp/seal actions to reduce manual steps and errors for legal teams.",
        liveUrl:
          "https://www.loom.com/share/4fddc51e64074fb79fa5d57a8a9dd555?sid=5cb40411-0a0e-4492-9335-edf09aa3436b",
      },
    },

    {
      id: "delore-care-portal",
      title: "Delore Care Website & Portal Refresh",
      category: "HealthTech / Services",
      year: 2024,
      description:
        "Redesigned the digital portal for an in-home care provider using Next.js and Tailwind CSS, improving engagement, traffic, and job applications while streamlining communication through SendGrid.",
      image: {
        src: "/projects/delore-care-hero.png",
        alt: "Healthcare service website redesign concept",
        caption: "Hero Section",
      },
      tags: ["Next.js", "Tailwind CSS", "SendGrid", "SEO"],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Modernize the care provider’s portal to improve discovery, trust, and conversions while making communication and submissions smoother for users.",
        achievements: [
          {
            value: "35%",
            label: "User Engagement Boost",
            trendIcon: "arrow_up",
          },
          {
            value: "25%",
            label: "Traffic Increase",
            trendIcon: "arrow_up",
          },
          {
            value: "40%",
            label: "More Job Applications",
            trendIcon: "arrow_up",
          },
          {
            value: "20%",
            label: "Higher User Satisfaction",
            trendIcon: "arrow_up",
          },
        ],
        images: [
          {
            src: "/projects/delore-care-services.png",
            alt: "Services page redesign concept",
            caption: "",
          },
          {
            src: "/projects/delore-care-career.png",
            alt: "Career page redesign concept",
            caption: "",
          },
        ],
        closingText:
          "Improved UX flows and SEO, integrated SendGrid-based communication, and optimized content structure to drive measurable growth in user actions and site performance.",
        liveUrl: "https://delorecare.com/",
      },
    },

    {
      id: "jvas-property-landing",
      title: "JVAS Property Landing Page (Airbnb)",
      category: "Hospitality / Marketing",
      year: 2024,
      description:
        "Designed and optimized a responsive landing page for an Airbnb apartment in Mapperley, Nottingham using Next.js and Tailwind CSS, focusing on SEO and conversion improvements.",
      image: {
        src: "/projects/jvas-hero.png",
        alt: "Property landing page concept for Airbnb apartment",
        caption: "Hero Section",
      },
      tags: ["Next.js", "Tailwind CSS", "SEO"],
      caseStudyUrl: "#",
      caseStudy: {
        challengeText:
          "Create a fast, mobile-first landing page that increases booking inquiries and organic traffic through improved SEO, clarity, and conversion-focused layout.",
        achievements: [
          {
            value: "30%",
            label: "Booking Inquiries Increase",
            trendIcon: "arrow_up",
          },
          {
            value: "15%",
            label: "Higher Conversion Rate",
            trendIcon: "arrow_up",
          },
          {
            value: "40%",
            label: "Organic Traffic Growth",
            trendIcon: "arrow_up",
          },
        ],
        images: [
          {
            src: "/projects/jvas-projects.png",
            alt: "Landing page overview for Airbnb apartment",
            caption: "Projects Section",
          },
          {
            src: "/projects/jvas-contact.png",
            alt: "Contact section of Airbnb apartment landing page",
            caption: "Contact Section",
          },
        ],
        closingText:
          "Optimized structure, copy hierarchy, and performance for discoverability and conversion—resulting in measurable increases in inquiries and search traffic.",
        liveUrl: "https://www.jvasproperty.com/",
      },
    },
  ],
  contact: {
    heading: "Ready to build the future?",
    subheading:
      "Currently available for select freelance opportunities and senior roles. Let's discuss how we can elevate your product.",
    cta: "Get in Touch",
    ctaUrl: "mailto:hello@happiness.dev",
  },
  footer: {
    copyright: "© 2024 Happiness Oyinlola. All rights reserved.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/happinessbalogun/",
      },
      { name: "GitHub", href: "https://github.com/Tana00" },
    ],
  },
  chat: {
    greeting:
      "Hi! I'm an AI assistant trained on Happiness's experience. Ask me anything about her projects or skills.",
    suggestedQuestions: recruiterQuestions,
    answers: {
      techStack:
        "I specialize in React, Next.js, TypeScript, and Tailwind CSS. I also work with state management, API integration, and dashboards/analytics.",
      wordAddIn:
        "The Word Add-in helps users generate structured content directly inside Word with templates and smart formatting.",
      saasConversion:
        "For SaaS conversion, I focus on tenancy boundaries, auth, modular services, analytics, and a smooth onboarding experience.",
      fallback:
        "Ask me about a project, your preferred stack, or a specific challenge — I’ll explain it clearly.",
    },
  },
};
