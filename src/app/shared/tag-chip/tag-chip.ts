import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-chip',
  standalone: true,
  templateUrl: './tag-chip.html',
})
export class TagChip {
  @Input({ required: true }) label = '';
}
