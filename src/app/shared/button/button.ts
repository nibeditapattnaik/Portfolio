import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './button.html',
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() href: string | null = null;
  @Input() target: '_blank' | '_self' = '_self';
}
