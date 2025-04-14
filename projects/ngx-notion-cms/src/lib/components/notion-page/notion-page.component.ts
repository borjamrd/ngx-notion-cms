import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    input,
    OnChanges,
    signal
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { INgxNotionResponse } from '../../services/http-notion.service';
import { NgxNotionService } from '../../services/notion.service';
import { NotionBlock } from '../../types';
import { LayoutContainerComponent } from '../layout-container/layout-container.component';
import { NotionBlockComponent } from '../notion-block/notion-block.component';
import { NotionTableOfContentsComponent } from '../table-of-contents/notion-table-of-contents.component';

/**
 * Component to display a Notion page.
 * 
 * @selector notion-page
 * @standalone true - This component is standalone and can be used without being declared in a module.
 * 
 * @description Displays the content of a Notion page by fetching the blocks associated with the given page ID. It supports rendering various Notion blocks and provides functionality for smooth scrolling to specific blocks.
 * 
 * @property {string} pageId - Required input property that receives the ID of the Notion page to display.
 * @property {string | undefined} iconPage - Signal that holds the icon of the page if available.
 * @property {INgxNotionResponse<NotionBlock[]>} notionBlocksQuery - Holds the response from the Notion service for fetching the page's blocks.
 * 
 * @method ngOnChanges() - Executed when input properties change. It triggers fetching the blocks of the page from the Notion service.
 * @method getchildContent(id: string): Observable<NotionBlock | undefined> - Returns an observable that emits the child block matching the provided ID.
 * @method scrollToBlock(id: string) - Scrolls smoothly to the block with the given ID and triggers change detection.
 */
@Component({
    selector: 'ngx-notion-page',
    imports: [
        CommonModule,
        NgTemplateOutlet,
        NotionBlockComponent,
        NotionTableOfContentsComponent,
        LayoutContainerComponent,
    ],
    templateUrl: './notion-page.component.html',
    styleUrl: './notion-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotionPageComponent implements OnChanges {
    private ngxNotionService: NgxNotionService = inject(NgxNotionService);

    public pageId = input.required<string>();
    public iconPage = signal<string | undefined>(undefined);

    public notionBlocksQuery!: INgxNotionResponse<NotionBlock[]>;
    private cdr = inject(ChangeDetectorRef);

    ngOnChanges(): void {
        this.notionBlocksQuery = this.ngxNotionService.getPageBlocks(
            this.pageId()
        );
    }

    getchildContent(id: string): Observable<NotionBlock | undefined> {
        return this.notionBlocksQuery.pipe(
            map(query => {
                if (query && query.data) {
                    return query.data.find(
                        block => block.id === id
                    ) as NotionBlock;
                }
                return undefined;
            })
        );
    }

    scrollToBlock(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            this.cdr.detectChanges();
        }
    }
}
