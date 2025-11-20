import type { Metadata } from "next";

import { Footer } from "@/components/navigation/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import RainBackground from "@/components/ui/RainBackground";
import { spaceGrotesk } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pushpesh Kumar | Portfolio",
  description:
    "Full-stack portfolio for Pushpesh Kumar showcasing skills, projects, education, and contact information.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className="bg-background text-foreground">
    <body className={`${spaceGrotesk.className} min-h-screen antialiased`}>
      <RainBackground />
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;

