'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
            <span className='text-amber-50'>Application Experiences </span>
          </h1>

          <p className='mt-6 text-lg text-slate-400 leading-relaxed'>
            Full Stack Developer | Next.js · Nuxt.js · React.js · Laravel · MERN
            Stack — Building high-performance web systems from interface to API.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-wrap gap-4 items-center'>
            {/* Anime-styled Explore Projects Button */}
            <a href='#projects' className='relative group inline-block'>
              {/* Pulsing Backlight Halo */}
              <motion.div
                className='absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 blur-sm opacity-50 -z-10'
                initial={{ opacity: 0.3, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div
                className='relative px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm flex items-center gap-2 overflow-hidden shadow-lg shadow-cyan-500/30 cursor-pointer select-none'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                {/* Dynamic Light Sheen / Flash Effect */}
                <motion.div
                  className='absolute inset-0 w-1/2 h-full bg-white/40 skew-x-[-20deg] pointer-events-none'
                  initial={{ x: '-150%' }}
                  whileHover={{ x: '250%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />

                <span className='relative z-10 tracking-wide'>
                  Explore Projects
                </span>

                {/* Snappy Anime Bouncing Arrow */}
                <motion.div
                  className='relative z-10'
                  initial={{ x: 0 }}
                  whileHover={{ x: [0, 6, 2, 6] }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                  }}>
                  <ArrowRight className='w-4 h-4 stroke-[2.5]' />
                </motion.div>
              </motion.div>
            </a>

            <Link
              href='/resume'
              className='px-6 py-3.5 rounded-2xl border border-white/15 bg-slate-950/60 backdrop-blur-xl text-slate-100 font-semibold text-sm flex items-center gap-2.5 hover:bg-slate-900/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 shadow-xl cursor-pointer group'>
              <FileText className='w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
              <span>View Resume</span>
            </Link>
          </div>
        </div>

        {/* Right Column (Thick Cyber/Anime Laser Ring Banner) */}
        <div className='lg:col-span-5 flex justify-center items-center py-6'>
          <div className='relative group flex items-center justify-center'>
            {/* Ambient Background Aura */}
            <div className='absolute -inset-6 rounded-full bg-cyan-500/30 blur-2xl opacity-70 group-hover:opacity-100 group-hover:bg-fuchsia-500/40 transition duration-500' />

            {/* Thick Outer Running Laser Ring Wrapper (p-2 = 8px thickness) */}
            <div className='relative p-2 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_60px_rgba(217,70,239,0.8)] transition-all duration-500'>
              
              {/* Primary Thick Cyan Laser Beam */}
              <div
                className='absolute inset-[-200%] animate-[spin_2.5s_linear_infinite] pointer-events-none'
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0 200deg, #22d3ee 280deg, #ffffff 360deg)',
                }}
              />

              {/* Secondary Magenta/Purple Chasing Beam */}
              <div
                className='absolute inset-[-200%] animate-[spin_2.5s_linear_infinite] pointer-events-none'
                style={{
                  background:
                    'conic-gradient(from 180deg, transparent 0 200deg, #d946ef 280deg, #ffffff 360deg)',
                }}
              />

              {/* Inner Dark Mask Separator & Avatar Container */}
              <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-slate-950 p-[3px]'>
                <div className='w-full h-full rounded-full overflow-hidden bg-slate-900 border border-slate-800/80'>
                  <img
                    src='/images/profile.png'
                    alt='Profile Avatar'
                    className='w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 ease-out'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;