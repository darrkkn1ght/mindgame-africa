import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { globalContent } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindgameafrica.com"),
  title: {
    default: `${globalContent.institutionName} — Performance Science, Research & Education`,
    template: `%s | ${globalContent.institutionName}`,
  },
  description: globalContent.footerPositioningLine,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${globalContent.institutionName} — Performance Science, Research & Education`,
    description: globalContent.footerPositioningLine,
    url: "https://mindgameafrica.com",
    siteName: globalContent.institutionName,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: `${globalContent.institutionName} — Performance Science, Research & Education`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${globalContent.institutionName} — Performance Science, Research & Education`,
    description: globalContent.footerPositioningLine,
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        {/* Skip to main content accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
