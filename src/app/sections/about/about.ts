import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './about.html',
})
export class AboutSection {}
