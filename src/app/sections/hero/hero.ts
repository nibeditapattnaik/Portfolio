import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
})
export class HeroSection {
  protected readonly profile = PROFILE;
}
