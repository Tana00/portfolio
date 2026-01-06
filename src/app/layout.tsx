import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://happinessoyinlola.vercel.app/",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.description,
    siteName: portfolioData.personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.description,
    creator: "@happiness",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://happinessoyinlola.vercel.app/"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} bg-background-dark text-white antialiased selection:bg-primary/30 overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
