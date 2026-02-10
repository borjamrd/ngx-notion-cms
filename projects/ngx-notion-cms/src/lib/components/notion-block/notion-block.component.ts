import {
    ChangeDetectionStrategy,
    Component,
    effect,
    ElementRef,
    HostBinding,
    inject,
    input,
} from '@angular/core';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { SecureResourceUrlPipe } from '../../pipes/safe-resource-url.pipe';
import { NotionBlock } from '../../types/block.type';
import { NotionBlockCalloutComponent } from '../notion-block-callout/notion-block-callout.component';
import { NotionBlockCodeComponent } from '../notion-block-code/notion-block-code.component';
import { NotionBlockTextComponent } from '../notion-block-text/notion-block-text.component';
import { PageCoverComponent } from '../page-cover/page-cover.component';

@Component({
    selector: 'ngx-notion-block',
    imports: [
        NotionBlockTextComponent,
        Nl2brPipe,
        SecureResourceUrlPipe,
        NotionBlockCodeComponent,
        PageCoverComponent,
        NotionBlockCalloutComponent,
    ],
    templateUrl: './notion-block.component.html',
    styleUrl: './notion-block.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockComponent {
    templateRef = inject(ElementRef);
    notionBlockSignal = input.required<NotionBlock>();
    previousBlockType = input<NotionBlock['type']>();
    numberedListPosition = 1;
    @HostBinding('id')
    blockId: string = '';

    blockIdUpdateEffectRef = effect(() => {
        this.blockId = this.notionBlockSignal().id;
    });
}
