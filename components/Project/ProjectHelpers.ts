export interface ProjectProps {
  project: {
    title: string,
    description: string,
    layout: 'Project' | 'Blog',
    repo: string,
    source: string,
    lastCommit: string
    languages: string[],
  }
}

