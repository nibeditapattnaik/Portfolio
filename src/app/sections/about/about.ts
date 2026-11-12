import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TagChip } from '../../shared/tag-chip/tag-chip';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeading, TagChip],
  templateUrl: './about.html',
})
export class AboutSection {
  protected readonly profile = PROFILE;
}
