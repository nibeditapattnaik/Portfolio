import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.html',
})
export class SectionHeading {
  @Input() headingId = '';
}
