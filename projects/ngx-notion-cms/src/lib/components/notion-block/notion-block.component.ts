import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NotionBlock } from '../../types/block.type';
import { NotionBlockTextComponent } from '../notion-block-text/notion-block-text.component';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { SecureResourceUrlPipe } from '../../pipes/safe-resource-url.pipe';
import { NotionBlockCodeComponent } from '../notion-block-code/notion-block-code.component';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { PageCoverComponent } from '../page-cover/page-cover.component';
import { NotionBlockCalloutComponent } from '../notion-block-callout/notion-block-callout.component';

@Component({
    selector: 'ngx-notion-block',
    standalone: true,
    imports: [
        CommonModule,
        NotionBlockTextComponent,
        Nl2brPipe,
        SecureResourceUrlPipe,
        NotionBlockCodeComponent,
        PageCoverComponent,
        NotionBlockCalloutComponent
    ],
    templateUrl: './notion-block.component.html',
    styleUrl: './notion-block.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockComponent {
    notionBlockSignal = input.required<NotionBlock>({ 'alias': 'notionBlock' });
    previousBlockType = input<NotionBlock['type']>();
    numberedListPosition = 1;
}
