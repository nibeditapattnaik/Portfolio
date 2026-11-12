import { Project } from './models';

// TODO: add more architecture detail and check that nothing here is confidential to your employer.
export const PROJECTS: Project[] = [
  {
    id: 'iiot-analytics-platform',
    name: 'IIoT Analytics Platform',
    summary:
      'Platform services that process data collected in the industrial IoT domain, with an API gateway, policy-based access control, and an LLM-powered support chatbot.',
    technologies: ['Quarkus', 'Spring Boot', 'gRPC', 'FastAPI', 'REST', 'OPA', 'Kubernetes', 'Mockito', 'Jest'],
    architecture:
      'An API gateway with rate limiting sits in front of an authentication service that uses OPA for policy-based access control, alongside a system service. Services run on Kubernetes.',
    challenges:
      'Migrated platform services to Kubernetes to improve deployment scalability and resilience, integrated domain-specific LLM capabilities for a context-aware chatbot that reduces manual support queries, and raised test coverage by 20%.',
  },
  {
    id: 'digital-commerce-saas',
    name: 'Cloud-Native SaaS Platform for Digital Commerce',
    summary:
      'Event-driven, loosely coupled services powering a digital commerce platform.',
    technologies: ['Java', 'Spring Boot', 'Spring Data', 'Spring Security', 'Kafka', 'Elasticsearch'],
    architecture:
      'Loosely coupled, event-driven services for gateway, authentication, search, ordering, and analytics, communicating through Kafka.',
    challenges:
      'TODO: describe a key technical challenge, for example consistency across services, search relevance, or scaling.',
  },
  {
    id: 'cloud-simulation-web-app',
    name: 'Cloud-Based Engineering Simulation Platform',
    summary:
      'Web application for a cloud-based engineering simulation and analysis platform.',
    technologies: ['Angular', 'Node.js'],
    architecture: 'TODO: describe the front-end and back-end structure.',
    challenges: 'TODO: describe a key technical challenge.',
  },
];