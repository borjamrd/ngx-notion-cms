import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-projects-view',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects-view.component.html',
    styleUrl: './projects-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsViewComponent { }
