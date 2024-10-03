import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-layout-container',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutContainerComponent { }
