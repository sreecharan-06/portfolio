export type ProjectCategory = 'all' | 'web' | 'fullstack' | 'ai-ml' | 'dsa' | 'hackathon';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  featured: boolean;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  keyFeatures: string[];
  technologies: {
    frontend?: string;
    backend?: string;
    database?: string;
    algorithms?: string;
    auth?: string;
    other?: string;
  };
  metrics?: string;
  architectureNotes?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  iconName?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  coursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: 'Hackathon' | 'Technical Project' | 'Coding Practice' | 'Academic Project' | 'Open Source';
  location: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsGained: string[];
  credentialUrl?: string;
  status?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: 'Competition' | 'Academic' | 'DSA / Coding' | 'Hackathon';
  badge?: string;
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  headline: string;
  subtitle: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  location: string;
  resumeUrl: string;
  badges: string[];
  focusAreas: string[];
}
