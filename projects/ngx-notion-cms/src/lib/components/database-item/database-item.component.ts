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
import { PostTagDirective } from '../../directives/post-tag.directive';
import { NgxNotionService } from '../../services/notion.service';
import { NgxSettingService } from '../../services/settings.service';
import { NotionBlock, NotionDatabaseItem } from '../../types';
import { getBlockImageURL } from '../../utils/utils';

@Component({
    selector: 'ngx-notion-database-item',
    standalone: true,
    imports: [CommonModule, PostTagDirective],
    templateUrl: './database-item.component.html',
    styleUrl: './database-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseItemComponent implements OnInit {
    private cdr = inject(ChangeDetectorRef);
    private destroyRef = inject(DestroyRef);
    private settingsService = inject(NgxSettingService)

    public blockPage = signal<NotionBlock | null>(null);
    public clicked = output<NotionDatabaseItem['id']>();
    public databaseItem = input.required<NotionDatabaseItem>();
    public imgSrc = signal<string>('');
    public isLoaded = signal(false);
    public showImage = signal<boolean>(false)

    private notionService = inject(NgxNotionService)
    ngOnInit() {
        this.showImage.set(this.settingsService.getGlobalSettings().database.showImage ?? true)
        this.notionService.getPageBlocks(this.databaseItem().id)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
            ).subscribe(response => {
                if (response.data) {
                    const blocks = response.data;
                    blocks.forEach(block => {
                        if (block?.type === 'page' && block.format?.page_cover) {
                            this.imgSrc.set(getBlockImageURL(block.format.page_cover!, block!))
                        }
                    })
                }
            })
    }

    setLoad() {
        this.isLoaded.set(true);
        this.cdr.detectChanges();
    }
}
