import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience';
import { Card } from '../../shared/card/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Card, SectionHeading],
  templateUrl: './experience.html',
})
export class ExperienceSection {
  protected readonly experience = EXPERIENCE;
}
