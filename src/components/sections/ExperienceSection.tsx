import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 w-full max-w-6xl mx-auto px-6 border-t border-slate-800/50">
      <SectionHeading
        title="Professional Experience"
        subtitle="My journey in engineering high-quality web and mobile applications."
      />

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-10">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-3.5 top-0 bg-slate-950 border border-cyan-500/50 p-1.5 rounded-full text-cyan-400">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
              <span className="text-xs font-semibold text-cyan-400">{exp.period}</span>
              <h3 className="text-xl font-bold text-slate-100 mt-1">{exp.role}</h3>

              <ul className="space-y-2 mb-4 text-sm text-slate-400 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};