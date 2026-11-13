import { Component } from '@angular/core';
import { FOCUS_AREAS } from '../../data/profile';
import { Card } from '../../shared/card/card';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-engineering-focus',
  standalone: true,
  imports: [Card, SectionHeading],
  templateUrl: './engineering-focus.html',
})
export class EngineeringFocusSection {
  protected readonly focusAreas = FOCUS_AREAS;
}
