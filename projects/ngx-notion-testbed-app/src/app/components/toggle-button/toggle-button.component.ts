import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-toggle-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toggle-button.component.html',
    styleUrl: './toggle-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex'
    }
})
export class ToggleButtonComponent {
    private themeService: ThemeService = inject(ThemeService);

    toggleTheme() {
        this.themeService.updateTheme();
    }
}
