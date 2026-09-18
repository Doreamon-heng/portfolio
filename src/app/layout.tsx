import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio | Modern Web & Mobile Solutions",
  description:
    "Full Stack software developer specializing in Next.js, Laravel, Flutter, and RESTful web API architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-[#030712] text-slate-100 antialiased min-h-screen flex flex-col relative`}
      >
        {/* GLOBAL FIXED BACKGROUND */}
        <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none select-none">
          {/* Main Wallpaper Image */}
          <img
            src="https://img.magnific.com/free-photo/abstract-dark-background-with-flowing-colouful-waves_1048-13124.jpg?semt=ais_hybrid&w=740&q=80" // place your image in /public/hero-bg.jpg
            alt="Website Background"
            className="w-full h-full object-cover opacity-70 scale-105"
          />

          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/50 to-[#030712]/90" />
          <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply" />
        </div>

        {/* WEBSITE LAYOUT */}
        <Navbar />
        <div className="flex-grow relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
