import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './education.html',
})
export class EducationSection {}
