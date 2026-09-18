import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillsData } from '@/data/skills';

export const TechStackSection = () => {
  return (
    <section id="skills" className="py-20 w-full max-w-7xl mx-auto px-6">
      <SectionHeading
        title="Tech Stack & Core Expertise"
        subtitle="Tools, languages, and frameworks I use to solve complex digital challenges."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="p-8 md:p-10 rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-800/60">
              <h3 className="text-2xl font-bold text-slate-100 tracking-wide capitalize">
                {category.category}:
              </h3>
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 px-3.5 py-1.5 rounded-full border border-cyan-800/60">
                {category.skills.length} Skills
              </span>
            </div>

            {/* Circular Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
              {category.skills.map((skill) => {
                // Circle calculations mapped to exact 128x128 viewBox
                const radius = 50;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (skill.level / 100) * circumference;

                return (
                  <div key={skill.name} className="flex flex-col items-center group cursor-pointer w-full">
                    
                    {/* Perfect Circle Wrapper */}
                    <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
                      
                      {/* Radial Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* SVG with viewBox to lock perfectly circular aspect ratio */}
                      <svg 
                        viewBox="0 0 128 128" 
                        className="w-32 h-32 transform -rotate-90 aspect-square"
                      >
                        {/* Background Track Circle */}
                        <circle
                          cx="64"
                          cy="64"
                          r={radius}
                          className="stroke-slate-800/90"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Dynamic Progress Fill Circle */}
                        <circle
                          cx="64"
                          cy="64"
                          r={radius}
                          className="stroke-cyan-400 transition-all duration-700 group-hover:stroke-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>

                      {/* Center Percentage Display */}
                      <span className="absolute text-lg font-black text-cyan-400 tracking-tight">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Title */}
                    <span className="mt-3 text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors text-center truncate max-w-[130px]">
                      {skill.name}
                    </span>

                    {/* Stack Subtitle */}
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-0.5">
                      1 STACK
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};