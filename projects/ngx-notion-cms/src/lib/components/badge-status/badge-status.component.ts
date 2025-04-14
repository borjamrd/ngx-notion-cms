import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NotionDatabaseItem } from '../../types';

@Component({
    selector: 'ngx-badge-status',
    imports: [
        CommonModule,
    ],
    templateUrl: './badge-status.component.html',
    styleUrl: './badge-status.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeStatusComponent {

  public status = input.required<NotionDatabaseItem['status']>();
}
