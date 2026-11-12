# Project Plan – Personal Software Engineering Portfolio V1

**Duration:** 2 days (6–8 hours) | **Hosting:** GitHub Pages | **Approach:** Agentic development, one story at a time
**Requirements:** see `docs/BRD.md` (authoritative). Agent rules: see `.github/copilot-instructions.md`.

---

## 1. Branch Mapping

| Work | Branch | Who |
| ---- | ------ | --- |
| Story 01 (project setup, initial commit) | `main` | Developer only, before branch protection is enabled |
| Stories 02–09 (structure, UI, content, QA) | `feature/*` UI branches (e.g. `feature/portfolio-ui`, `feature/hero-about`) | Developer + agent |
| Stories 10–11 (CI/CD, release) | `feature/github-deployment` or `ci/*` | Developer + agent |

Branch names are examples. Each branch is created from the latest `main`, merged through a pull request, then deleted.

All changes reach `main` through a pull request that passes the build check.

---

## 2. Epics and Stories

### EPIC 01 – Foundation

**Story 01: Initialize Angular Application** (BRD: NFR-04)

Tasks:

* Verify Node.js and Angular CLI.
* Create the app with `ng new` (SCSS, no routing, no SSR).
* Enable TypeScript strict mode.
* Add ESLint and Prettier.
* Create `README.md`, `docs/BRD.md`, `docs/PROJECT-PLAN.md`, and `.github/copilot-instructions.md`.
* Push to GitHub, then enable branch protection on `main`.

Acceptance Criteria:

* App runs locally with `ng serve`.
* Production build succeeds.
* Configuration and docs are committed.

**Story 02: Establish Application Structure** (BRD: NFR-01, NFR-04, NFR-05, NFR-10)

Tasks:

* Create the app layout with `header` and `footer` components in `core/`.
* Create an empty component for each portfolio section in `sections/`.
* Create reusable components in `shared/` (section heading, card, tag chip, button).
* Define TypeScript interfaces and sample data files (with `TODO` placeholders) in `data/`.
* Define global SCSS design tokens and a responsive base in `styles.scss`.

Acceptance Criteria:

* Component structure is clear and components are reusable.
* Content (data) is separated from presentation.
* App builds and the layout works on mobile and desktop.

---

### EPIC 02 – Portfolio UI

**Story 03: Hero and About** (BRD: FR-01, FR-02)

Tasks:

* Header with anchor navigation (including a mobile menu).
* Hero: name, designation, introduction, GitHub and LinkedIn links, resume link.
* About: professional summary, years of experience, engineering background, domains.

Acceptance Criteria:

* Introduction is visible and navigation scrolls to the correct sections.
* Resume and social links work.

**Story 04: Engineering Focus and Skills** (BRD: FR-03, FR-05)

Tasks:

* Engineering Focus section (backend, microservices, distributed systems, IoT/IIoT, cloud-native, AI interests).
* Skills grouped by category (languages, frameworks, databases, messaging, DevOps).

Acceptance Criteria:

* Skills are grouped logically and easy to scan.
* Layout is responsive.

**Story 05: Projects, Experience, and Education** (BRD: FR-04, FR-06, FR-07)

Tasks:

* Project cards: description, technologies, architecture and key challenges, repository link.
* Experience: organization, designation, duration, responsibilities and achievements.
* Education, including BITS Pilani M.Tech Software Systems.

Acceptance Criteria:

* Selected projects, experience, and education are displayed and readable.
* Layout is responsive.

**Story 06: Contact and Footer** (BRD: FR-08)

Tasks:

* Email (`mailto:`), LinkedIn, and GitHub links.
* Footer.

Acceptance Criteria:

* All contact links work.
* Footer displays correctly.

**Story 07: Integrate Real Content**

Tasks:

* Owner supplies bio, resume PDF, project, experience, and education details.
* Replace `TODO` placeholders in `data/` with the supplied content only.
* Add the resume PDF and images to `public/`.

Acceptance Criteria:

* No `TODO` placeholders remain in the rendered site.
* Content matches the owner's resume and contains no private or sensitive data.

---

### EPIC 03 – Quality Assurance

**Story 08: Responsive, Functional, Accessibility, and SEO Checks** (BRD: NFR-01, NFR-02, NFR-03, NFR-08, NFR-09)

Tasks:

* Test desktop, tablet, and mobile layouts.
* Verify navigation, external links, and resume download.
* Check accessibility basics: semantic HTML, heading order, alt text, focus states, contrast.
* Add SEO metadata in `index.html`: title, description, Open Graph tags, favicon.
* Check the browser console for errors.

Acceptance Criteria:

* No major layout issues.
* All navigation and links work.
* No critical console errors.

**Story 09: Production Build Validation**

Tasks:

* Run lint, tests (where configured), and the production build.
* Fix errors and any warnings that affect release.

Acceptance Criteria:

* Lint passes, tests pass where configured, and the production build succeeds.

---

### EPIC 04 – CI/CD and Deployment

**Story 10: Configure GitHub Actions** (BRD: NFR-07)

Tasks:

* Create the workflow: Node setup, `npm ci`, lint, tests, production build.
* Run build-only on pull requests; deploy to GitHub Pages only on push to `main`.

Acceptance Criteria:

* PRs show a passing or failing build check.
* A merge to `main` builds and deploys successfully.

**Story 11: Production Release**

Tasks:

* Set the Pages source to GitHub Actions.
* Set the correct `base href` (required unless the repo is named `<username>.github.io`).
* Verify the public site over HTTPS.
* Update `README.md` with the live URL, local run steps, and deployment notes.

Acceptance Criteria:

* Site is publicly accessible over HTTPS.
* All sections render and there are no broken links or asset paths.

---

## 3. Two-Day Schedule

**Day 1 – Build (about 4 hours)**

| Time | Activity |
| ---- | -------- |
| 0:00–0:30 | Story 01 |
| 0:30–1:30 | Story 02 |
| 1:30–3:00 | Stories 03–04 |
| 3:00–4:00 | Stories 05–06 |

Deliverable: complete UI running locally with placeholder content.

**Day 2 – Content, Quality, Deployment (about 4 hours)**

| Time | Activity |
| ---- | -------- |
| 0:00–0:45 | Story 07 |
| 0:45–1:30 | Stories 08–09 |
| 1:30–2:30 | Story 10 |
| 2:30–3:15 | Story 11 |
| 3:15–4:00 | Final check against BRD success criteria |

Deliverable: public portfolio with automated deployment.

---

## 4. Repository Structure

```
personal-portfolio/
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/deploy.yml
├── docs/
│   ├── BRD.md
│   └── PROJECT-PLAN.md
├── public/
│   ├── images/
│   └── resume/
├── src/
│   ├── app/
│   │   ├── core/          header, footer
│   │   ├── sections/      hero, about, engineering-focus, projects,
│   │   │                  skills, experience, education, contact
│   │   ├── shared/        reusable UI components
│   │   ├── data/          typed interfaces and portfolio content
│   │   └── app.*          root component
│   ├── styles.scss
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

Do not add services, modules, or folders beyond this unless a story requires it.

---

## 5. Commit Conventions

Conventional Commits, for example:

```
feat: add hero and about sections (FR-01, FR-02)
style: implement responsive layout
test: add component smoke tests
ci: configure github pages deployment
docs: update readme
```

---

## 6. Agentic Workflow

For each story: plan, implement only that story, review the diff, run `ng build` (and lint/tests), then the developer commits. Never ask the agent to build multiple stories or the whole portfolio at once.

---

## 7. Definition of Done

A story is done when:

* Acceptance criteria are met.
* Code follows Angular and TypeScript conventions, with no unnecessary dependencies.
* Lint, tests (if configured), and `ng build` pass.
* Responsive behavior is checked where relevant.
* The diff has been reviewed and committed by the developer.