# Copilot Instructions – Personal Portfolio

## 1. Project Context
**Project:** Personal Portfolio | **Framework:** Angular | **Type:** Static single-page website

### Source of Truth
- `docs/BRD.md` is the authoritative source for requirements.
- `docs/PROJECT-PLAN.md` defines phases, stories, tasks, and acceptance criteria.
- Do not implement anything listed as out of scope in the BRD (backend, database, authentication, admin dashboard, CMS, AI chatbot, backend-dependent contact form, paid services or analytics, complex animations, multi-language).
- If requirements conflict or are unclear, stop and ask.
- Do not add features without explicit approval, even if they are common in other portfolios.

## 2. Technology Stack and Standards
- Angular 20 (as installed in this workspace). Do not use APIs or syntax from newer major versions. TypeScript strict mode, standalone components, SCSS.
- Angular CLI for builds. Prefer native Angular and browser capabilities.
- No paid services. Ask before installing any new dependency, and justify it.

### Architecture
- Single-page layout with HTML anchor navigation. Do not introduce Angular Router.
- All portfolio content lives in typed files under `src/app/data/`.
- Components render data and must not contain hardcoded personal content.
- One component per section under `src/app/sections/`.
- Reusable UI components under `src/app/shared/`.
- Avoid unnecessary abstractions, services, and dependencies.

### Styling
- Global design tokens as CSS variables in `src/styles.scss`; component styles in SCSS.
- Mobile-first, responsive across mobile, tablet, and desktop.
- Consistent spacing, typography, and colors. Avoid inline styles.

### Performance and SEO
- Lazy-load below-the-fold images, use compressed images, limit web fonts to one or two families.
- Maintain `<title>`, meta description, Open Graph tags, and favicon in `src/index.html`.

## 3. HTML and Accessibility
- Semantic elements: `header`, `nav`, `main`, `section`, `footer`. Logical heading order.
- Meaningful `alt` text for informative images; empty `alt` for decorative ones.
- Visible keyboard focus, full keyboard navigation, sufficient color contrast.
- ARIA only when native semantics are not enough. Descriptive link text.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.

## 4. Git Workflow and Branch Restrictions

### Branches
- `main`: stable and deployable. Never commit or push to it. Make no changes while `main` is checked out.
<!-- - `feature/portfolio-ui`: Angular UI only (components, sections, styling, portfolio data). Do not modify GitHub Actions workflows. -->
- `main`: stable and deployable. Never commit or push to it. Make no changes while `main` is checked out.
- `feature/github-deployment` and any `ci/*` branch: CI/CD and GitHub Pages deployment only (workflows, deployment config). Do not modify UI implementation files. Build config (`angular.json`, `package.json`) may be changed only when required for deployment, and state exactly what changed and why.
- Any other `feature/*` branch (for example `feature/portfolio-ui` or `feature/hero-about`): Angular UI work only (components, sections, styling, portfolio data). Do not modify `.github/workflows/` or deployment config.
- If a task needs files outside the current branch's scope, stop and tell me.
- If a task needs files outside the current branch's scope, stop and tell me.

### Safety Rules
Before making changes:
1. Check the current branch and `git status`.
2. Confirm the branch fits the task. Stop if it is `main`.
3. Never overwrite, discard, or modify unrelated existing changes.

Never run `git push`, `git merge`, `git rebase`, or any force operation. Do not create commits unless explicitly asked. You may suggest a Conventional Commit message (e.g. `feat: add hero section (FR-01)`). The developer commits, merges, and pushes.

## 5. Agentic Workflow
- Work on one phase, story, or explicitly assigned task at a time. Do not start the next phase without approval.
- Read the relevant BRD requirements and plan acceptance criteria, and inspect existing code before changing it.
- For multi-file or ambiguous tasks, propose a short plan and wait for approval. For small, clear tasks, implement directly.
- Make minimal changes and follow existing conventions. Do not modify unrelated files.
- Review your own output, then validate (section 7).

## 6. Content Accuracy
- Never invent personal information: employers, titles, dates, achievements, project details, or metrics.
- Use `TODO` placeholders for missing information and preserve what the owner provided.
- Do not publish private or sensitive information (phone numbers, addresses, secrets, tokens).

## 7. Code Quality and Validation
- Follow Angular and TypeScript best practices. Use typed interfaces and avoid `any`.
- Avoid duplicated code; reuse shared components.
- After implementation: run `ng build`, fix all errors, then run tests and lint if configured.
- Report remaining warnings or failures honestly.
- Never claim a build or test passed unless it was actually run and succeeded.

## 8. Task Completion Report
End each task with a brief report:
1. Summary of changes (files created and modified).
2. Requirements addressed (BRD IDs).
3. Build, test, and lint results.
4. Known issues or TODOs.
5. Suggested commit message.

**Final principle:** follow the approved requirements, respect branch boundaries, make minimal necessary changes, and keep the developer in control of every important decision.