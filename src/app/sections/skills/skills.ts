import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './skills.html',
})
export class SkillsSection {}
