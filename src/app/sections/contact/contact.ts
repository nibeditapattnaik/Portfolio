import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Button } from '../../shared/button/button';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Button, SectionHeading],
  templateUrl: './contact.html',
})
export class ContactSection {
  protected readonly profile = PROFILE;
  protected readonly invitation = 'Interested in connecting? Reach out through any of these links.';
}
