import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { FOCUS_AREAS, PROFILE } from './data/profile';
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
});
