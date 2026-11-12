import { Certification, Education } from './models';

export const EDUCATION: Education[] = [
  {
    institution: 'BITS Pilani',
    degree: 'M.Tech in Software Systems',
    period: '2024 – 2026',
    grade: 'CGPA: 7.8',
  },
  {
    institution: "Shiksha 'O' Anusandhan University",
    degree: 'B.Tech in Electrical Engineering',
    period: '2013 – 2017',
    location: 'Bhubaneswar, Odisha',
    grade: 'CGPA: 9',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Computer Vision', issuer: 'IIT Madras', year: 'Jun – Dec 2025' },
  { title: 'CCE-Proficience: Embedded Systems and IoT', issuer: 'IISc Bengaluru', year: '2023' },
  { title: 'CCE-Proficience: Calculus and Optimization for Machine Learning', issuer: 'IISc Bengaluru', year: '2022' },
  { title: 'Machine Learning, Deep Learning & AI', issuer: 'Stanford University (Coursera)', year: '2022' },
];