export interface Project {
  id: number;
  featured: boolean;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  icon: string;
}