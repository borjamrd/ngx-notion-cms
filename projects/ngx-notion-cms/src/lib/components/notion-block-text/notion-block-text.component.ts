import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { NotionBlock } from '../../types';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

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
