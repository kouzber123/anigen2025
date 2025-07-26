import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-header',
  imports: [MatIcon, MatBadge, MatButton, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
