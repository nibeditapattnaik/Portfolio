export interface Profile {
  name: string;
  designation: string;
  tagline: string;
  intro: string;
  yearsOfExperience: string;
  aboutSummary: string[];
  roles: string[];
  domains: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  technologies: string[];
  architecture: string;
  challenges: string;
  repoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  grade?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}