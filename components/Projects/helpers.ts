export type ProjectInterface = {
  title: string,
  description: string,
  layout: 'Project' | 'Blog',
  repo: string,
  source: string,
  lastCommit: string
  languages: string[],
}

export const projects: Array<ProjectInterface> = [
  {
    title: 'Flagfluent',
    layout: 'Project',
    description: 'Cool game to play with your friends. Displays a random flag of a country. User will try to guess the country flag or be punished by their friends.',
    languages: ['React', 'TypeScript', 'CSS', 'HTML'],
    source: 'https://flagfluent.netlify.app/',
    repo: 'https://github.com/AlviDervishaj/Flagfluent',
    lastCommit: "April 25th, 2022",
  },
  {
    title: 'Todo-App',
    layout: 'Project',
    description: 'Todo App inspired by Iphone layout',
    source: 'https://todo-44b80.web.app/',
    repo: 'https://github.com/AlviDervishaj/Todo-App',
    languages: ['React', 'JavaScript', 'CSS', "HTML"],
    lastCommit: "April 25th, 2022",
  },
  {
    title: 'Youtube UI Clone',
    layout: 'Project',
    description: 'Youtube UI Clone made with NextJs and Tailwind',
    languages: ['NextJS', 'Tailwind', 'JavaScript', 'CSS'],
    repo: 'https://github.com/AlviDervishaj/youtube-clone',
    source: 'https://youtube-clone-wheat.vercel.app/',
    lastCommit: 'April 25th, 2022',
  },
  {
    title: 'Social Card',
    layout: 'Project',
    description: 'Social Card Generator',
    languages: ['React', 'JavaScript', 'CSS', 'HTML'],
    repo: 'https://github.com/AlviDervishaj/Social-Card',
    source: 'https://social-card-silk.vercel.app/',
    lastCommit: 'April 25th, 2022',
  }
]
