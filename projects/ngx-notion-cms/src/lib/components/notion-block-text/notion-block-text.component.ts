import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotionBlock } from '../../types';

@Component({
    selector: 'ngx-notion-block-text',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notion-block-text.component.html',
    styleUrl: './notion-block-text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockTextComponent {
    @Input() notionBlock!: NotionBlock;
}
