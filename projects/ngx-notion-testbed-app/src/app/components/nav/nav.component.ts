import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
