import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sonakshi Sharma",
  description:
    "AI researcher and engineer. Building intelligent systems that help experts make better decisions — in healthcare, energy, and beyond.",
  keywords: [
    "Sonakshi Sharma",
    "AI researcher",
    "machine learning",
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
    title: "Sonakshi Sharma",
    description:
      "AI researcher and engineer. Building intelligent systems that help experts make better decisions.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonakshi Sharma",
    description:
      "AI researcher and engineer. Building intelligent systems that help experts make better decisions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
