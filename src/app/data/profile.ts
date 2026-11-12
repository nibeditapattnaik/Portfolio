import { FocusArea, Profile } from './models';

export const PROFILE: Profile = {
  name: 'Nibedita Priyadarshini Pattnaik',
  designation: 'Software Developer',
  tagline: 'Building scalable, secure cloud-native and IoT platforms.',
  intro:
    'Software developer with 8+ years of experience in microservices, event-driven systems, and IoT analytics platforms using Java, Node.js, and Angular.',
  yearsOfExperience: '8+',
  aboutSummary: [
    'Experienced software developer with 8+ years of expertise in developing software applications, with in-depth knowledge of the software development lifecycle.',
    'Strong experience building scalable and secure web applications using Java, Node.js, and Angular, and designing cloud-native distributed systems.',
    'Led a team from idea to launch on an IoT analytics platform and a digital commerce platform.',
  ],
  roles: ['Backend Java Developer', 'Full Stack Developer', 'Web Developer'],
  domains: ['IoT / IIoT', 'Digital commerce', 'Cloud computing', 'Distributed systems'],
  // TODO: replace the dummy values below with real ones
  email: 'your.name@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  resumeUrl: 'resume/resume.pdf',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Backend Engineering',
    description:
      'Designing and building services with Java, Spring Boot, and Quarkus, exposed through REST and gRPC APIs.',
  },
  {
    title: 'Microservices and Distributed Systems',
    description:
      'Loosely coupled, event-driven services using Kafka and RabbitMQ, with API gateways, authentication, and search.',
  },
  {
    title: 'IoT and IIoT Solutions',
    description:
      'Services that process data collected in the industrial IoT domain as part of an analytics platform.',
  },
  {
    title: 'Cloud-Native',
    description:
      'Containerized services on Docker and Kubernetes, deployed on cloud platforms, with infrastructure managed using Terraform.',
  },
  {
    title: 'AI and Machine Learning Interests',
    description:
      'Integrated domain-specific LLM capabilities into a platform chatbot, and continuing to study machine learning and computer vision.',
  },
];