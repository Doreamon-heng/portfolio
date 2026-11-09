import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Front End",
    skills: [
      {
        name: 'HTML',
        image:'/public/images/skills/image.jpg'
      },
      {
        name: 'CSS',
        image:'/public/images/skills/css.jpg'
      },
      {
        name: 'JavaScript',
        image:'/public/images/skills/js.jpg'
      },
    ],
  },
    {
    category: "Styling & Frameworks",
    skills: [
      {
        name: 'Bootstrap5',
        image:'/public/images/skills/bootstrap-stack.png'
      },
      {
        name: 'Tailwind CSS',
        image:'/public/images/skills/tailwind-css.jpg'
      },
            {
        name: 'React.js',
        image:'/public/images/skills/Reactjs.jpg'
      },
      {
        name: 'Next.js',
        image:'/public/images/skills/nextjs.png'
      }
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      {
        name: 'PHP',
        image:'/public/images/skills/php.png'
      },
      {
        name: 'Laravel',
        image:'/public/images/skills/laravel.png'
      }
    ],
  },
  {
    category: "Tools & Databases",
    skills: [
      {
        name: 'MySQL',
        image:'/public/images/skills/mysql.png'
      },
      {
        name: 'GitHub',
        image:'/public/images/skills/github.jpg'
      },
      {
        name: 'VsCode',
        image:'/public/images/skills/vscode.png'
      }
    ]
  },
  {
    category: "Platform & Deployment",
    skills: [
      {
        name: 'Vercel',
        image:'/public/images/skills/vercel-logo.jpg'
      },
      {
        name: 'Netlify',
        image:'/public/images/skills/netlify.jpg'
      },
      {
        name: 'Render',
        image:'/public/images/skills/render-logo.png'
      }
    ]
  }
];