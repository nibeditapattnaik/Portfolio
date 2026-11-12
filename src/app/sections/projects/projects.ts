import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './projects.html',
})
export class ProjectsSection {}
