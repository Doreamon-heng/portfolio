export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// src/types/index.ts

export interface Profile {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  company: string;
  role: string;
  description: string[];
  technologies: string[];
}