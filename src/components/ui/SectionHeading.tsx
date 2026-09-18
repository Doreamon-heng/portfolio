import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
        {title} <span className="text-cyan-400">.</span>
      </h2>
      <p className="mt-2 text-base text-slate-400 max-w-2xl">{subtitle}</p>
    </div>
  );
};