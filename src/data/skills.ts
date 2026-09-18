import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Basic Web Developments",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      {name: "Bootstrap 5", level: 95},
      
    ],
  },
  {
    category: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React JS", level: 78 },
      { name: "Nuxt JS", level: 60 },
      { name: "JQuery", level: 65 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Laravel / PHP", level: 78 },
      { name: "Node / Express JS", level: 60 },
      { name: "RESTful API Design", level: 70 },
      { name: "MySQL / Database ERD", level: 65 },

    ],
  },
];