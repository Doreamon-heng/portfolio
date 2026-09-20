'use client';

import React from "react";
import Link from "next/link";
import { Heart, ArrowUp, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { name: "Telegram", href: "https://t.me", icon: FaTelegram },
  { name: "Email", href: "mailto:contact@example.com", icon: FaEnvelope },
];

const footerNav = [
  { name: "About", href: "#hero" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-xl text-slate-400 py-12 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8 relative z-10">
        
        {/* Top Row: Brand, Nav, and Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/60 pb-8">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-100 font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>
              Ratha<span className="text-cyan-400">Heng</span>
            </span>
          </Link>

          {/* Centered Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            {footerNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons + Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900/80 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Row: Minimal Copyright */}
      <div className="max-w-5xl mx-auto px-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-slate-500 text-center sm:text-left">
        <p>© {currentYear} Heng Ratha. All rights reserved.</p>

        <p className="flex items-center gap-1.5">
          Built with{" "}
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-pulse" />{" "}
          using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};