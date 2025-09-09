export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile'
}

export interface Experience {
  id: number
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Skill {
  id: number
  name: string
  level: 'frontend' | 'backend' | 'database' | 'tools'    
}
