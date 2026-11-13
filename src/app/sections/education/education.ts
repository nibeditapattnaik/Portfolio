import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION } from '../../data/education';
import { Card } from '../../shared/card/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [Card, SectionHeading],
  templateUrl: './education.html',
})
export class EducationSection {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}
