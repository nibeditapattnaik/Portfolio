import { Component } from '@angular/core';
import { Footer } from './core/footer/footer';
import { Header } from './core/header/header';
import { AboutSection } from './sections/about/about';
import { ContactSection } from './sections/contact/contact';
import { EducationSection } from './sections/education/education';
import { EngineeringFocusSection } from './sections/engineering-focus/engineering-focus';
import { ExperienceSection } from './sections/experience/experience';
import { HeroSection } from './sections/hero/hero';
import { ProjectsSection } from './sections/projects/projects';
import { SkillsSection } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    HeroSection,
    AboutSection,
    EngineeringFocusSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
