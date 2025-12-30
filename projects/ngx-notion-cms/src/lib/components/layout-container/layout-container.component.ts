import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'ngx-layout-container',
    imports: [],
    templateUrl: './layout-container.component.html',
    styleUrl: './layout-container.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
    // input() creates a Signal that reflects the incoming value from parents
    public containerClass = input<string | undefined>();
}
