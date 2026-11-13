import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills';
import { Card } from '../../shared/card/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TagChip } from '../../shared/tag-chip/tag-chip';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Card, SectionHeading, TagChip],
  templateUrl: './skills.html',
})
export class SkillsSection {
  protected readonly skillCategories = SKILLS;
}
