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
│       ├── CaseStudyModal.tsx      # Reusable case study modal
│       ├── ProjectCard.tsx      # Reusable project card
│       ├── ChatWidget.tsx       # AI chat interface
│       └── SocialIcons.tsx      # Social media icons
├── data/
│   └── portfolio.ts        # Content & configuration
├── types/
│   └── portfolio.ts        # TypeScript interfaces
└── next.config.js          # Next.js configuration
```

## 🎨 Theme Configuration

Custom Tailwind CSS v4 colors defined in `globals.css` using `@theme`:

```css
@theme {
  --color-primary: rgb(49 120 196);
  --color-accent-blue: rgb(49 120 198);
  --color-background-dark: rgb(18 18 18);
  --color-surface-dark: rgb(30 30 30);
  --color-text-dim: rgb(161 161 170);
}
```

Color values:

- **primary**: `rgb(49 120 196)` - TypeScript blue (#3178c4)
- **accent-blue**: `rgb(49 120 198)` - Accent color (#3178c6)
- **background-dark**: `rgb(18 18 18)` - Dark background (#121212)
- **surface-dark**: `rgb(30 30 30)` - Surface color (#1E1E1E)
- **text-dim**: `rgb(161 161 170)` - Dimmed text (#A1A1AA)

## ⚙️ Configuration Files

### Tailwind CSS Setup

The project uses **Tailwind CSS v4** with `@tailwindcss/postcss` plugin:

**postcss.config.mjs**:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**globals.css**:

- Uses `@import "tailwindcss"` for Tailwind v4 setup
- Defines custom colors via `@theme` block
- Includes custom animations (marquee, swiss-grid)
- Custom utility classes for scrollbar styling

**tailwind.config.ts**:

- Defines content paths for scanning components
- Dark mode enabled with `"class"` strategy
- Custom color palette using RGB values for opacity support
- Extended animations and border radius

### Next.js Configuration

**layout.tsx**:

- Applied `className="dark"` on `<html>` element to enable dark mode
- Uses Inter font via `next/font` with variable `--font-inter`
- Material Icons stylesheet loaded from Google Fonts
- Comprehensive metadata with Open Graph and Twitter cards

**page.tsx**:

- Implements App Router structure
- Composes all section components
- Fixed ChatWidget positioned at bottom-right corner

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

This installs all dependencies including:

- Next.js 16.1.1 with Turbopack
- Tailwind CSS v4 with @tailwindcss/postcss
- TypeScript and development tools
- Framer Motion for animations

### Environment Setup

No additional environment variables are required. All configuration is done through:

- `tailwind.config.ts` - Tailwind customization
- `src/app/globals.css` - Global styles and theme variables
- `postcss.config.mjs` - PostCSS plugins
- `next.config.js` - Next.js configuration

## 🏃 Development

Start the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically reload when you save changes thanks to Next.js fast refresh.

## 📦 Build & Production

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

The build process:

1. Compiles TypeScript
2. Bundles React components
3. Optimizes CSS with Tailwind
4. Generates static pages
5. Optimizes images

## ✅ Type Checking

Run TypeScript type checking without building:

```bash
npm run type-check
```

## 🔍 Linting

Run ESLint to check code quality:

```bash
npm run lint
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

Edit the `@theme` block in `src/app/globals.css`:

```css
@theme {
  --color-primary: rgb(49 120 196);
  --color-accent-blue: rgb(49 120 198);
  --color-background-dark: rgb(18 18 18);
  --color-surface-dark: rgb(30 30 30);
  --color-text-dim: rgb(161 161 170);
}
```

**Note**: Tailwind CSS v4 requires RGB values instead of hex colors. Convert hex to RGB using: `rgb(R G B)` where R, G, B are 0-255 values.

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

| Tool                 | Version  | Purpose                                            |
| -------------------- | -------- | -------------------------------------------------- |
| Next.js              | 16.1.1   | React framework with App Router & Turbopack        |
| TypeScript           | 5.5.4    | Type safety and developer experience               |
| Tailwind CSS         | 4.x      | Utility-first CSS framework with v4 @theme support |
| @tailwindcss/postcss | Latest   | PostCSS plugin for Tailwind CSS v4                 |
| Framer Motion        | 11.15.0  | Smooth animations and transitions                  |
| React                | 18.3.1   | UI library                                         |
| next/font            | Included | Optimized font loading (Inter)                     |
| next/image           | Included | Optimized image component                          |

## 📦 Dependencies

**Production**:

- react, react-dom - UI framework
- next - React framework
- framer-motion - Animation library

**Development**:

- TypeScript - Type checking
- Tailwind CSS - Styling
- @tailwindcss/postcss - PostCSS plugin for Tailwind v4
- ESLint - Code linting
- Autoprefixer - CSS vendor prefixes
- PostCSS - CSS transformation

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
