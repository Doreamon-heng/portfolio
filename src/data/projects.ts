import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'digital-bookstore',
    title: 'Digital Bookstore',
    description:
      'A full-featured shopping platform with user authentication, product catalog, cart management, and payment checkout flow.',
    category: 'Frontend',
    tags: ['Bootstrap5', 'JavaScript'],
    image: '/images/bookstore.png',
    demoUrl: 'https://bookstore-haven.netlify.app',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    deploy: 'Netlify',
  },
  {
    id: 'Nexus-topup',
    title: 'Game topup website',
    description:
      'A full website topup game with backend API integration, and secure payment processing. frontend built with Nuxt.js and Tailwind CSS, backend powered by Laravel API and MySQL database, integrated with Bakong API for seamless transactions.on this project frontend hosting on vercel, backbend hosting on render and database with aivencloud.',
    category: 'Fullstack',
    tags: ['Nuxt Js', 'Tailwind CSS', 'Laravel API', 'MySQL' , 'Bakong API'],
    image:
      '/images/nexus-topup.png',
    demoUrl: 'https://gametopup-frontend-delta.vercel.app/',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    deploy: [
      {
        platform: 'Vercel',
        url: 'https://gametopup-frontend-delta.vercel.app/'
      },
      {
        platform: 'Render',
        
      },
      {
        platform: 'Aiven Cloud',
        
      }
    ],
  },
  {
    id: 'Movie Website',
    title: 'Movie Website',
    description:
      'Cross-platform mobile application featuring interactive product discovery, animated cart interactions, and live status updates.',
    category: 'Frontend',
    tags: ['React Js', 'API Integration', 'CSS'],
    image: '/images/sabayshop.png',
    demoUrl: 'https://sbayonlineshop.netlify.app/',
    githubUrl: 'https://github.com/Doreamon-heng/project01',
    featured: true,
    deploy: 'netlify',
  },
  {
    id: 'Guesthouse System',
    title: 'Dashboard Management System',
    description: 'An Admin dashbord to manage Gusthouse',
    category: 'Fullstack',
    tags: ['Next JS', 'TypeScript', 'Tailwind', 'Prisma And PostgreSql'],
    image: '/images/projectadmin.png',
    demoUrl: 'https://ghmanagesystem-ratha.netlify.app/',
    githubUrl: 'https://github.com/Doreamon-heng',
    featured: true,
    deploy: 'vercel',
  },
  {
    id: 'backend-api-service',
    title: 'Laravel RESTful API Service',
    description:'Robust RESTful API service architecture handling secure RBAC, Bakong Itegration, Sanctum authentication, order orchestration, and database optimization.',
    category: 'Backend',
    tags: ['Laravel', 'Sanctum', 'PHP', 'MySQL', 'GitHub'],
    image:
      '/images/laravel api.png',
    githubUrl: 'https://github.com/Doreamon-heng/back-end-testing-vercel',
    featured: false,
    deploy: 'github',
  },
];
