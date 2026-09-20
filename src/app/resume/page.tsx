import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Briefcase,
  Code2,
  Sparkles,
  Maximize2,
} from 'lucide-react';

export default function ResumePage() {
  const resumePdfPath = "/resume.pdf";

  return (
    // Added pt-28 to push content safely below your fixed main navbar
    <main className="min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-slate-100 overflow-x-hidden">
      
      {/* Sub-Header Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Open Fullscreen</span>
          </a>

          <a
            href={resumePdfPath}
            download="Heng_Ratha_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/10"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Title Header */}
      <div className="mb-8 border-b border-slate-800/60 pb-6">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4" /> Curriculum Vitae
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
          Heng Ratha
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Full Stack Developer
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PDF Embedded Glass Frame */}
        <div className="lg:col-span-8 flex flex-col gap-3 w-full">
          <div className="w-full rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Window Controls Bar */}
            <div className="px-4 py-3 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">
                  resume.pdf
                </span>
              </div>

              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                title="Expand View"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded PDF Canvas */}
            <div className="w-full h-[680px] bg-slate-900/40 relative">
              <object
                data={`${resumePdfPath}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src={`${resumePdfPath}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title="Resume Document"
                />
              </object>
            </div>
          </div>
        </div>

        {/* Right Details Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          
          <div className="p-6 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-cyan-400">
              <FileText className="w-5 h-5" />
              <h2 className="text-base font-bold text-slate-100">Overview</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full Stack & Mobile Developer focused on high-performance web systems and cross-platform apps using Next.js, Laravel, and Flutter.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-cyan-400">
              <Code2 className="w-5 h-5" />
              <h2 className="text-base font-bold text-slate-100">Core Stack</h2>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Next.js', 'React', 'Tailwind CSS', 'Laravel', 'Flutter', 'TypeScript', 'MySQL'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md flex flex-col gap-3">
            <div className="flex items-center gap-2 text-cyan-400">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-sm font-bold text-slate-100">Official CV Document</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Need an ATS-formatted PDF file to send to recruiters?
            </p>
            <a
              href={resumePdfPath}
              download="Heng_Ratha_Resume.pdf"
              className="mt-2 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}