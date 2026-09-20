/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative pt-32 pb-20 md:pt-40 md:pb-32 w-full max-w-6xl mx-auto px-6 overflow-hidden'>
      {/* Ambient Glow */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-[140px] rounded-full pointer-events-none -z-10' />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
        {/* Left Column */}
        <div className='lg:col-span-7'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' />
            Available for Opportunities
          </div>

          <h1 className='text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight'>
            Fullstack Developer{' '}
              <span className='text-amber-50'>Application Experiences {''}</span>
          </h1>

          <p className='mt-6 text-lg text-slate-400 leading-relaxed'>
            Full Stack Developer | Next.js · Nuxt.js · React.js · Laravel · MERN Stack — Building high-performance web systems from interface to API.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-wrap gap-4 items-center'>
            <a
              href='#projects'
              className='px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20'>
              Explore Projects <ArrowRight className='w-4 h-4' />
            </a>
            <Link
              href='/resume'
              className='px-6 py-3.5 rounded-2xl border border-white/15 bg-slate-950/60 backdrop-blur-xl text-slate-100 font-semibold text-sm flex items-center gap-2.5 hover:bg-slate-900/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 shadow-xl cursor-pointer group'>
              <FileText className='w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
              <span>View Resume</span>
            </Link>
          </div>
        </div>

        {/* Right Column (Modern Photo Banner) */}
        <div className='lg:col-span-5 flex justify-center'>
          <div className='relative group'>
            {/* Glowing Border */}
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500' />

            {/* Photo Card */}
            <div className='relative w-72 h-72 md:w-110 md:h-110 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full overflow-hidden'>
              <img
                src='https://avatars.githubusercontent.com/u/194563324?s=400&u=1f6613ba2e81c5bc56eeb99800149894fb48e1cd&v=4'
                alt='Profile Avatar'
                className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
