
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'ngx-layout-container',
    imports: [],
    templateUrl: './layout-container.component.html',
    styleUrl: './layout-container.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
    styleClass = input<string>()
}
