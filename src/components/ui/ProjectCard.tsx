'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, Eye } from 'lucide-react';
import { Project } from '@/types';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card Wrapper */}
      <div className="group rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
        <div>
          {/* Project Image Container */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative h-48 w-full overflow-hidden bg-slate-800 cursor-pointer group/img"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/30 z-10">
              {project.category}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-slate-100 font-medium text-xs">
              <Maximize2 className="w-4 h-4 text-cyan-400" />
              <span>View Full Details</span>
            </div>
          </div>

          <div className="p-6">
            <h3
              onClick={() => setIsOpen(true)}
              className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            {/* Truncated Description */}
            <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* View Full Details Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="mt-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" /> Read full description
            </button>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links & Deployment Info */}
        <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60">
          <div>
            {project.deploy && (
              <span className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md">
                Deployed: <span className="text-cyan-400 capitalize">{project.deploy}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-100 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Single All-in-One Popup Modal (Photo + Complete Description) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/50">
              <div className="flex items-center gap-3">
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  {project.category}
                </span>
                <h4 className="text-base font-bold text-slate-100">{project.title}</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Photo Display */}
              <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[50vh] object-contain rounded-xl"
                />
              </div>

              {/* Full Description (No line-clamp) */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Project Details
                </h5>
                <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Built With
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-800 text-cyan-300 border border-slate-700/60 px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-4">
              {project.deploy ? (
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg">
                  Deployed: <span className="text-cyan-400 capitalize">{project.deploy}</span>
                </span>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};