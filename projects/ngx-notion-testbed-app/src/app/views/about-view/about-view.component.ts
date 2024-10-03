import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutViewComponent { }
