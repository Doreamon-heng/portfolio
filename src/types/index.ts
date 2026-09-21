export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Fullstack' | 'Frontend' | 'Backend';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  deploy: string;
}


export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}