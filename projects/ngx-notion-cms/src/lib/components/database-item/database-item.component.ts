import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    input,
    OnInit,
    output,
    signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgxNotionService } from '../../services/notion.service';
import { NgxSettingService } from '../../services/settings.service';
import { NotionBlock, NotionDatabaseItem } from '../../types';
import { getBlockImageURL } from '../../utils/utils';
import { BadgeStatusComponent } from '../badge-status/badge-status.component';

/**
 * Component to display a Notion database item.
 * 
 * @selector ngx-notion-database-item
 * @standalone true - This component is standalone and can be used without being declared in a module.
 * 
 * @description Displays the details of a database item, including its image, status, and allows interaction with it. It uses a Notion service to fetch the blocks of a page.
 * 
 * @property {NotionBlock | null} blockPage - Signal that holds the page block fetched from Notion.
 * @property {Output<NotionDatabaseItem['id']>} clicked - Event emitted when the database item is clicked.
 * @property {Input<NotionDatabaseItem>} databaseItem - Required input property that receives the database item details.
 * @property {string} imgSrc - Signal holding the URL of the page image.
 * @property {boolean} isLoaded - Signal indicating if the image has been loaded.
 * @property {boolean} showImage - Signal indicating whether the image should be displayed, based on global settings.
 * @property {boolean} showStatus - Signal indicating whether the item status should be displayed, based on global settings.
 * 
 * @method ngOnInit() - Executed when the component is initialized, fetches the page blocks from the Notion service.
 * @method setLoad() - Marks the image as loaded and triggers change detection.
 */
@Component({
    selector: 'ngx-notion-database-item',
    standalone: true,
    imports: [CommonModule, BadgeStatusComponent],
    templateUrl: './database-item.component.html',
    styleUrl: './database-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseItemComponent implements OnInit {
    private cdr = inject(ChangeDetectorRef);
    private destroyRef = inject(DestroyRef);
    private settingsService = inject(NgxSettingService);

    public blockPage = signal<NotionBlock | null>(null);
    public clicked = output<NotionDatabaseItem['id']>();
    public databaseItem = input.required<NotionDatabaseItem>();
    public imgSrc = signal<string>('');
    public isLoaded = signal(false);

    public showImage = signal<boolean>(this.settingsService.getGlobalSettings().database.showImage ?? true);
    public showStatus = signal<boolean>(this.settingsService.getGlobalSettings().database.showStatus ?? true);
    private notionService = inject(NgxNotionService);

    ngOnInit() {
        this.notionService.getPageBlocks(this.databaseItem().id)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
            ).subscribe(response => {
                if (response.data) {
                    const blocks = response.data;
                    blocks.forEach(block => {
                        if (block?.type === 'page' && block.format?.page_cover) {
                            this.imgSrc.set(getBlockImageURL(block.format.page_cover!, block!));
                        }
                    });
                }
            });
    }

    setLoad() {
        this.isLoaded.set(true);
        this.cdr.detectChanges();
    }
}
