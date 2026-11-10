# Business Requirements Document (BRD)
## Personal Software Engineering Portfolio – V1
**Project Type**: Personal Project  
**Project Category**: Web Application Development  
**Priority**: High  
**Target Duration**: 2 days (6–8 development hours)  
**Version**: 1.0

## 1. Business Overview  
The objective is to design and develop a professional personal portfolio website to showcase professional experience, technical expertise, engineering capabilities, education, and software development projects.
The website will act as a centralized professional identity for prospective employers, recruiters, technical interviewers, and collaborators.
The application will be developed using Angular and deployed using GitHub Pages.
The project will follow industry-standard software engineering practices, including version control, modular development, code quality, automated build and deployment, and technical documentation.
## 2. Business Objectives  
Establish a professional online presence.
Showcase software engineering experience and technical expertise.
Demonstrate hands-on experience in backend engineering, microservices, IoT, and distributed systems.
Showcase selected software projects with technical explanations.
Provide recruiters with easy access to professional experience, resume, GitHub, and LinkedIn.
Demonstrate practical knowledge of modern frontend development and CI/CD.
Build the project using free and open-source technologies.
## 3. Target Audience 
| Audience | Expected outcome |
| :--- | :--- |
| Technical Recruiters | Understand experience and technical skills |
| Hiring Managers | Evaluate engineering capabilities |
| Technical Interviewers | Explore projects and technical decisions |
| Developers | Understand project implementations |
| Collaborators | Connect for professional opportunities |

## 4. Functional Requirements
### FR-01: Home / Hero Section  
* Display professional name.
* Display professional designation.
* Display a concise introduction.
* Provide links to GitHub and LinkedIn.
* Provide a resume download/view option.
### FR-02: About Section  
* Display professional summary.
* Highlight years of experience.
* Describe engineering background.
* Highlight relevant domains.
### FR-03: Engineering Focus  
* Showcase backend engineering expertise.
* Highlight microservices and distributed systems.
* Highlight IoT and IIoT solutions.
* Highlight cloud-native and AI-related interests.
### FR-04: Projects  
* Display selected projects.
* Show project descriptions.
* Display technologies used.
* Explain architecture and key technical challenges.
* Provide GitHub repository links where available.
### FR-05: Technical Skills  
* Categorize technical skills.
* Display programming languages, frameworks, databases, messaging technologies, and DevOps tools.
### FR-06: Professional Experience  
* Display company/organization details.
* Display designation and duration.
* Describe responsibilities and achievements.
### FR-07: Education  
* Display academic qualifications.
* Include BITS Pilani M.Tech Software Systems qualification.
### FR-08: Contact  
* Display professional email.
* Provide LinkedIn and GitHub links.
* Provide an email contact link.
## 5. Non-Functional Requirements
| ID | Requirement |
| :--- | :--- |
| NFR-01 | Responsive across desktop, tablet, and mobile |
| NFR-02 | Accessible semantic HTML |
| NFR-03 | Good page-loading performance |
| NFR-04 | Maintainable Angular component structure |
| NFR-05 | Reusable UI components |
| NFR-06 | No paid runtime dependencies |
| NFR-07 | Secure static deployment over HTTPS |
| NFR-08 | Browser compatibility with modern browsers |
| NFR-09 | Basic SEO metadata |
| NFR-10 | Consistent design and typography |

## 6. Technology Constraints
* Angular and TypeScript for application development.
* Angular CLI for project management and builds.
* HTML5 and CSS3 for presentation.
* Git and GitHub for source control.
* GitHub Actions for automated CI/CD.
* GitHub Pages for hosting.
* No backend or database for V1.
* No paid third-party services.
* No mandatory paid libraries or subscriptions.
## 7. Out of Scope – V1
The following features will not be included in the initial release:  
* Backend APIs.
* Database integration.
* User authentication.
* Admin dashboard.
* Content management system.
* Dynamic blog management.
* AI chatbot.
* Contact form requiring a backend.
* Analytics requiring a paid service.
* Complex animations.
* Multi-language support.
These can be considered in future versions if there is a genuine requirement.
## 8. Success Criteria
The project will be considered successful when:
* The portfolio is accessible through a public GitHub Pages URL.
* All eight sections are implemented.
* Professional content is correctly displayed.
* The website is responsive.
* Navigation and external links work correctly.
* The production build completes successfully.
* GitHub Actions successfully builds and deploys the application.
* No paid infrastructure or service is required.
* Source code is available in a public GitHub repository.
## 9. Business Benefits
* Improved professional visibility.
* Easy sharing of technical achievements.
* Better presentation of engineering experience.
* Demonstration of practical Angular and CI/CD capabilities.
* A maintainable platform for future portfolio enhancements.
## 10. Project Assumptions
* Professional profile information will be provided by the project owner.
* Resume and project descriptions will be available.
* GitHub and GitHub Pages accounts are available.
* Portfolio content will initially be maintained in the source repository.
* The initial release will be a static website.

