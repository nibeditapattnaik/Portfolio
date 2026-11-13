import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { EDUCATION, CERTIFICATIONS } from './data/education';
import { EXPERIENCE } from './data/experience';
import { FOCUS_AREAS, PROFILE } from './data/profile';
import { PROJECTS } from './data/projects';
import { SKILLS } from './data/skills';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio sections with anchor targets', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      Array.from(compiled.querySelectorAll('main section')).map((section) => section.id),
    ).toEqual([
      'hero',
      'about',
      'engineering-focus',
      'projects',
      'skills',
      'experience',
      'education',
      'contact',
    ]);
  });

  it('should render the hero and about content from the profile data', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.hero-section h1')?.textContent?.trim()).toBe(PROFILE.name);
    expect(compiled.querySelector('.hero-designation')?.textContent?.trim()).toBe(
      PROFILE.designation,
    );
    expect(compiled.querySelector('.hero-tagline')?.textContent?.trim()).toBe(PROFILE.tagline);
    expect(
      Array.from(compiled.querySelectorAll('.about-summaries p')).map((paragraph) =>
        paragraph.textContent?.trim(),
      ),
    ).toEqual(PROFILE.aboutSummary);
    expect(
      Array.from(compiled.querySelectorAll('#about app-tag-chip')).map((chip) =>
        chip.textContent?.trim(),
      ),
    ).toEqual([...PROFILE.roles, ...PROFILE.domains]);
  });

  it('should expose secure external links and support keyboard menu dismissal', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const githubLink = compiled.querySelector<HTMLAnchorElement>(
      '.hero-actions a[href="' + PROFILE.github + '"]',
    );
    const menuButton = compiled.querySelector<HTMLButtonElement>('.site-menu-toggle');
    const firstNavLink = compiled.querySelector<HTMLAnchorElement>('.site-nav a');
    const nav = compiled.querySelector<HTMLElement>('.site-nav');

    expect(githubLink?.target).toBe('_blank');
    expect(githubLink?.rel).toBe('noopener noreferrer');
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');

    menuButton?.click();
    fixture.detectChanges();
    expect(menuButton?.getAttribute('aria-expanded')).toBe('true');

    firstNavLink?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
    expect(nav?.classList.contains('site-nav--open')).toBeFalse();
  });

  it('should render all focus areas and skill categories from their data', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      Array.from(compiled.querySelectorAll('#engineering-focus .card-title')).map((heading) =>
        heading.textContent?.trim(),
      ),
    ).toEqual(FOCUS_AREAS.map((focusArea) => focusArea.title));
    expect(
      Array.from(compiled.querySelectorAll('#engineering-focus app-card p')).map((description) =>
        description.textContent?.trim(),
      ),
    ).toEqual(FOCUS_AREAS.map((focusArea) => focusArea.description));

    expect(
      Array.from(compiled.querySelectorAll('#skills .card-title')).map((heading) =>
        heading.textContent?.trim(),
      ),
    ).toEqual(SKILLS.map((category) => category.category));
    expect(
      Array.from(compiled.querySelectorAll('#skills app-tag-chip')).map((chip) =>
        chip.textContent?.trim(),
      ),
    ).toEqual(SKILLS.flatMap((category) => category.skills));
  });

  it('should render project data verbatim and show repository links only when provided', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectCards = Array.from(compiled.querySelectorAll('#projects app-card article'));

    expect(projectCards).toHaveSize(PROJECTS.length);
    projectCards.forEach((card, index) => {
      const project = PROJECTS[index];
      expect(card.querySelector('h3')?.textContent?.trim()).toBe(project.name);
      expect(card.querySelector('p')?.textContent?.trim()).toBe(project.summary);
      expect(
        Array.from(card.querySelectorAll('app-tag-chip')).map((chip) => chip.textContent?.trim()),
      ).toEqual(project.technologies);
      expect(card.querySelectorAll('.project-detail p')[0].textContent?.trim()).toBe(
        project.architecture,
      );
      expect(card.querySelectorAll('.project-detail p')[1].textContent?.trim()).toBe(
        project.challenges,
      );

      const repoLink = card.querySelector<HTMLAnchorElement>('.project-link');
      if (project.repoUrl) {
        expect(repoLink?.href).toBe(project.repoUrl);
        expect(repoLink?.textContent?.trim()).toBe(`View ${project.name} on GitHub`);
        expect(repoLink?.target).toBe('_blank');
        expect(repoLink?.rel).toBe('noopener noreferrer');
      } else {
        expect(repoLink).toBeNull();
      }
    });
  });

  it('should render experience entries as a timeline with all highlights', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const entries = Array.from(compiled.querySelectorAll('#experience .experience-timeline > li'));

    expect(entries).toHaveSize(EXPERIENCE.length);
    entries.forEach((entry, index) => {
      const experience = EXPERIENCE[index];
      expect(entry.querySelector('h3')?.textContent?.trim()).toBe(experience.role);
      expect(entry.querySelector('.timeline-company')?.textContent?.trim()).toBe(
        experience.company,
      );
      expect(entry.querySelector('.timeline-period')?.textContent?.trim()).toBe(experience.period);
      expect(
        Array.from(entry.querySelectorAll('.experience-highlights li')).map((highlight) =>
          highlight.textContent?.trim(),
        ),
      ).toEqual(experience.highlights);
    });
  });

  it('should render education fields conditionally and list all certifications', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const educationCards = Array.from(
      compiled.querySelectorAll('#education .education-grid article'),
    );
    const certificationItems = Array.from(
      compiled.querySelectorAll('#education .certification-list li'),
    );

    expect(educationCards).toHaveSize(EDUCATION.length);
    educationCards.forEach((card, index) => {
      const education = EDUCATION[index];
      expect(card.querySelector('h3')?.textContent?.trim()).toBe(education.degree);
      expect(card.querySelector('.education-institution')?.textContent?.trim()).toBe(
        education.institution,
      );
      expect(card.textContent).toContain(education.period);
      expect(card.textContent).toContain(education.location ?? '');
      expect(card.textContent).toContain(education.grade ?? '');
      expect(card.querySelectorAll('p')).toHaveSize(
        2 + Number(Boolean(education.location)) + Number(Boolean(education.grade)),
      );
    });

    expect(certificationItems).toHaveSize(CERTIFICATIONS.length);
    certificationItems.forEach((item, index) => {
      const certification = CERTIFICATIONS[index];
      expect(item.querySelector('.certification-title')?.textContent?.trim()).toBe(
        certification.title,
      );
      expect(item.textContent).toContain(certification.issuer);
      expect(item.textContent).toContain(certification.year);
    });
  });
});
