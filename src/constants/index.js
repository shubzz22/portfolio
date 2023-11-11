import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: ux,
  },
  {
    title: 'Data Analytics',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Data Analyst Intern',
    company_name: 'Trainity',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - Jan 2023',
  },
  {
    title: 'Web Developer Intern',
    company_name: 'CodeClause',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2023 - Feb 2023',
  },
  {
    title: 'Data Science Intern',
    company_name: 'CodeClause',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2023 - Mar 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Miracle Developers Community',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'QR Pass Utility',
    description: 'QR Pass Utility is a new generation pass utility for event management. This utility consists of an Android app and Web Based Dashboard for analytics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'data analytics',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/ashishh23',
    demo: 'https://www.miracledevelopers.in/',
  },
  {
    id: 'project-2',
    name: 'ERP ( Ad Pharma Company) ',
    description:
      ' Dynamic school website with admin-controlled event uploads.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/ashishh23',
    demo: 'https://anandvanashramsamgurukul.com/',
  },
  {
    id: 'project-3',
    name: 'MD official Website',
    description: 'MIracle Developers is able to provide quality service on  Swaftware projects big and small  .',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'php',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/ashishh23',
    demo: 'https://www.miracledevelopers.in/about',
  },
  {
    id: 'project-4',
    name: 'Web Application',
    description: `Besides the leading brand 'Morya Plast Pro' for the retail marke`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/ashishh23',
    demo: 'http://moryaplastpro.in/',
  },
  {
    id: 'project-5',
    name: 'Bank Loan Case Study',
    description:
      'Conducted EDA to prevent unjust loan rejections for urban customers.',
    tags: [
      {
        name: 'excel',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'jupyter notebook',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/ashishh23',
    demo: 'https://www.miracledevelopers.in/',
  },
];

export { services, technologies, experiences, projects };
