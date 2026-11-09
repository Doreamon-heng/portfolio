import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillsData } from '@/data/skills';
import Image from 'next/image';

export const TechStackSection = () => {
  return (
    <section id='skills' className='py-20 w-full max-w-7xl mx-auto px-6'>
      <SectionHeading
        title='Tech Stack'
        subtitle='Tools, languages, and frameworks I use to solve complex digital challenges.'
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
        {skillsData.map((category) => (
          <div
            key={category.category}
            className='relative rounded-3xl border border-slate-800/80 bg-slate-900/40 
                 backdrop-blur-xl p-6 md:p-8 shadow-2xl transition-all duration-500 
                 hover:border-cyan-500/30 hover:bg-slate-900/60'>
            {/* Header */}
            <div className='flex items-center justify-between mb-8 pb-4 border-b border-slate-800/60'>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-slate-100 tracking-tight capitalize'>
                  {category.category}
                </h3>
                <p className='text-xs text-slate-400 mt-1 font-medium'>
                  Technologies I work with
                </p>
              </div>

              <span
                className='text-xs font-semibold text-cyan-300 bg-cyan-500/10 
                         border border-cyan-500/20 px-3.5 py-1 rounded-full 
                         shadow-[0_0_12px_rgba(6,182,212,0.15)]'>
                {category.skills.length} Skills
              </span>
            </div>

            {/* Skills Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {category.skills.map((skill) => {
                const imageSrc = skill.image.replace(/^\/?public\//, '/');

                return (
                  <div
                    key={skill.name}
                    className='group/skill relative flex flex-col items-center justify-center 
                         gap-3 p-5 min-h-[130px] rounded-2xl border border-slate-800/60 
                         bg-slate-950/40 backdrop-blur-md transition-all duration-300 
                         hover:-translate-y-1.5 hover:border-cyan-500/40 hover:bg-slate-900/80 
                         hover:shadow-xl hover:shadow-cyan-500/10'>
                    {/* Skill Icon Container */}
                    <div className='relative flex items-center justify-center w-14 h-14'>
                      <Image
                        src={imageSrc}
                        alt={skill.name}
                        width={56}
                        height={56}
                        className='w-12 h-12 object-contain transition-all duration-300 
                             group-hover/skill:scale-110
                             mix-blend-screen opacity-85 group-hover/skill:opacity-100'
                      />
                    </div>

                    {/* Skill Name */}
                    <h4
                      className='text-xs font-medium text-slate-300 text-center 
                             tracking-wide transition-colors duration-300 
                             group-hover/skill:text-cyan-400'>
                      {skill.name}
                    </h4>
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
