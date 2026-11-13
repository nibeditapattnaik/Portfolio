import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Card } from '../../shared/card/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TagChip } from '../../shared/tag-chip/tag-chip';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Card, SectionHeading, TagChip],
  templateUrl: './projects.html',
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
}
