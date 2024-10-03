import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectViewComponent { }
