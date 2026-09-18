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


export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}