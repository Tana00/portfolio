# Happiness Oyinlola | Senior Frontend Developer Portfolio

A modern, production-ready Next.js portfolio application built with TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion for smooth scroll animations
- **SEO**: Metadata API, Open Graph tags, and semantic HTML
- **Images**: Next.js Image component for automatic optimization
- **Fonts**: Self-hosted Inter font via `next/font`
- **Components**: Modular, reusable component architecture
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Data**: Separated content in `data/portfolio.ts` for easy updates

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer with socials
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero section with CTA
│   │   ├── SkillsSection.tsx    # Marquee skills section
│   │   ├── ImpactSection.tsx    # Stats/impact cards
│   │   ├── WorkSection.tsx      # Portfolio projects
│   │   └── ContactSection.tsx   # CTA and contact
│   └── ui/
│       ├── ProjectCard.tsx      # Reusable project card
│       ├── ChatWidget.tsx       # AI chat interface
│       └── SocialIcons.tsx      # Social media icons
├── data/
│   └── portfolio.ts        # Content & configuration
├── types/
│   └── portfolio.ts        # TypeScript interfaces
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Theme Configuration

Custom Tailwind colors defined in `tailwind.config.ts`:

- **primary**: `#3178c4` (TypeScript blue)
- **accent-blue**: `#3178c6`
- **background-dark**: `#121212`
- **surface-dark**: `#1E1E1E`
- **text-dim**: `#A1A1AA`

## 🔧 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

```bash
npm run build
npm start
```

## ✅ Type Checking

```bash
npm run type-check
```

## 🎯 Key Components

### HeroSection
- Animated hero with gradient text
- Call-to-action buttons
- Smooth scroll animations using Framer Motion

### SkillsSection
- Infinite marquee carousel
- Hover interactions
- Grayscale toggle effect

### ImpactSection
- Stat cards with icons
- Grid layout (responsive)
- Intersection observer animations

### WorkSection
- Alternating project layout
- Next.js Image optimization
- Project tags and links

### ContactSection
- Email CTA
- Animated heading
- SEO optimized

### ChatWidget
- Collapsible AI chat interface
- Suggested questions
- Smooth open/close animations

## 📄 Data Schema

All portfolio content is managed in `src/data/portfolio.ts`. Edit this file to update:

- Personal information
- Navigation links
- Hero content
- Skills
- Impact metrics
- Projects (title, description, images, tags)
- Contact information
- Social links
- Chat suggestions

### Example Project Update

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  category: 'Category',
  year: 2024,
  description: 'Project description...',
  image: {
    src: 'https://...',
    alt: 'Project image description',
  },
  tags: ['React', 'Next.js', 'TypeScript'],
  caseStudyUrl: '#',
}
```

## 🔍 SEO Features

- **Metadata API**: Automatically generates meta tags from portfolio data
- **Open Graph**: Social media rich previews with site name and descriptions
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3) and semantic landmarks
- **ARIA Labels**: Accessible form inputs, buttons, and interactive elements
- **Image Optimization**: Next.js Image component with automatic format conversion

## 🎬 Animations

- **Framer Motion**: Smooth component entrance and scroll trigger animations
- **CSS Keyframes**: Infinite marquee scroll effect on skills section
- **Hover States**: Interactive UI feedback on buttons and cards
- **Scroll Triggers**: Viewport-based animations on impact and work sections

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of `<section>`, `<nav>`, `<main>`, `<footer>`, `<header>`
- **ARIA Labels**: `aria-label`, `aria-labelledby`, and `aria-expanded` attributes
- **Heading Hierarchy**: Proper h1 → h2 → h3 structure for screen readers
- **Focus States**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard support for navigation and chat widget
- **Color Contrast**: WCAG AA compliant contrast ratios throughout
- **Screen Reader Text**: Hidden SR-only text for icon-only buttons

## 📱 Responsive Design

- **Mobile-first approach**: Base styles for mobile, enhanced with breakpoints
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px)
- **Flexible Layouts**: Grid and flexbox for responsive arrangement
- **Touch-friendly**: Minimum 44px touch targets for mobile buttons
- **Hidden Elements**: Navigation links hidden on mobile, shown on md breakpoint

## 🚀 Deployment

### Deploy to Vercel

The easiest deployment is to Vercel (creators of Next.js):

```bash
npm run build
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Other Platforms

Build the application:
```bash
npm run build
npm start
```

## 📝 Customization Guide

### Update Portfolio Content

Edit `src/data/portfolio.ts` to change:

```typescript
// Personal info
personal: {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your-email@example.com',
  // ... other fields
}

// Add/remove projects
projects: [
  {
    id: 'project-id',
    title: 'Project Name',
    // ... project details
  },
  // ... more projects
]
```

### Change Theme Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      'accent-blue': '#YOUR_COLOR',
      // ... other colors
    },
  },
}
```

### Add New Sections

1. Create component in `src/components/sections/`
2. Export from that file
3. Import and use in `src/app/page.tsx`

### Modify Components

All components are reusable and accept props for customization:

```typescript
<ProjectCard project={projectData} imagePosition="right" />
<ImpactSection />
<HeroSection />
```

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15.1.3 | React framework with App Router |
| TypeScript | 5.5.4 | Type safety and developer experience |
| Tailwind CSS | 3.4.3 | Utility-first CSS framework |
| Framer Motion | 11.15.0 | Smooth animations and transitions |
| React | 18.3.1 | UI library |

## 📚 Component Reference

### Layout Components

**Navbar** - Fixed navigation with logo, links, and resume button
```typescript
<Navbar /> // No props required, uses data from portfolio.ts
```

**Footer** - Footer with copyright and social links
```typescript
<Footer /> // No props required, uses data from portfolio.ts
```

### Section Components

**HeroSection** - Hero banner with CTA buttons
```typescript
<HeroSection /> // Uses hero data from portfolio.ts
```

**SkillsSection** - Animated marquee of tech skills
```typescript
<SkillsSection /> // Uses skills array from portfolio.ts
```

**ImpactSection** - Grid of impact metrics and stats
```typescript
<ImpactSection /> // Uses impact array from portfolio.ts
```

**WorkSection** - Portfolio projects showcase
```typescript
<WorkSection /> // Uses projects array from portfolio.ts
```

**ContactSection** - CTA for getting in touch
```typescript
<ContactSection /> // Uses contact data from portfolio.ts
```

### UI Components

**ProjectCard** - Reusable project showcase card
```typescript
<ProjectCard project={projectData} imagePosition="left" />
```

**ChatWidget** - Collapsible AI chat interface
```typescript
<ChatWidget /> // Uses chat data from portfolio.ts
```

## 🔗 Important Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

Copyright © 2024 Happiness Oyinlola. All rights reserved.

---

Built with ❤️ using **Next.js**, **TypeScript**, and **Tailwind CSS**.

For questions or customization needs, refer to the component documentation or review the source code in the `src/` directory.
