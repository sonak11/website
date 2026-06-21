import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonakshi Sharma — AI/ML Engineer & Researcher",
  description:
    "Building intelligent systems that help experts make better decisions. Research in Medical AI, Energy Forecasting, and Agentic Systems. Rutgers Honors College CS + Data Science.",
  keywords: [
    "Sonakshi Sharma",
    "AI researcher",
    "ML engineer",
    "medical AI",
    "explainable AI",
    "energy forecasting",
    "agentic systems",
    "Rutgers",
    "Cornell Break Through Tech",
  ],
  authors: [{ name: "Sonakshi Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sonakshi Sharma — AI/ML Engineer & Researcher",
    description:
      "Building intelligent systems that help experts make better decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonakshi Sharma — AI/ML Engineer & Researcher",
    description: "Building intelligent systems that help experts make better decisions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
