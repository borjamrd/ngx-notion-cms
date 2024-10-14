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

@Component({
    selector: 'notion-page',
    standalone: true,
    imports: [
        CommonModule,
        NgTemplateOutlet,
        NotionBlockComponent,
        NotionTableOfContentsComponent,
        LayoutContainerComponent,
    ],
    templateUrl: './notion-page.component.html',
    styleUrl: './notion-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
