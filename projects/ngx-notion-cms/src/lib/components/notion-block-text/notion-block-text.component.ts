import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { NotionBlock } from '../../types';

@Component({
    selector: 'ngx-notion-block-text',
    standalone: true,
    imports: [CommonModule, Nl2brPipe],
    templateUrl: './notion-block-text.component.html',
    styleUrl: './notion-block-text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockTextComponent {
    notionBlockSignal = input.required<NotionBlock>({ alias: 'notionBlock' });
}
