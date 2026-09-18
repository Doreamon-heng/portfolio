import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/30">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};