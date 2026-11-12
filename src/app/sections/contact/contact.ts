import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './contact.html',
})
export class ContactSection {}
