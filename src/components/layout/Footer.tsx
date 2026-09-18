import React from "react";
import { Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-500 flex items-center gap-1">
          Designed & Built with{" "}
          <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
          using Next.js & Tailwind CSS
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>

        </div>
      </div>
    </footer>
  );
};