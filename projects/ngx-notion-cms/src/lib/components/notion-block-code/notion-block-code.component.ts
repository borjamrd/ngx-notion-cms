import { Component, Input, OnInit, signal } from '@angular/core';
import {
    Highlight,
    HighlightAuto,
    provideHighlightOptions,
} from 'ngx-highlightjs';
import { NotionBlock } from '../../types/block.type';
import { CopyToClipboardComponent } from '../copy-to-clipboard/copy-to-clipboard.component';

@Component({
    selector: 'ngx-notion-block-code',
    standalone: true,
    templateUrl: './notion-block-code.component.html',
    styleUrl: './notion-block-code.component.scss',
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        }),
    ],
    imports: [HighlightAuto, Highlight, CopyToClipboardComponent],

})
export class NotionBlockCodeComponent implements OnInit {
    codeForHighlight = '';
    languange = '';
    te = signal('');
    @Input() notionBlock!: NotionBlock;

    ngOnInit(): void {
        if (this.notionBlock.properties?.language) {
            this.languange = this.notionBlock.properties.language[0][0];
            this.codeForHighlight = this.notionBlock.properties.title[0][0];
        }
    }

}
