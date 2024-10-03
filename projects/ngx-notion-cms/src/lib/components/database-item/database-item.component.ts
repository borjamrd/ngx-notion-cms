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
    signal,
} from '@angular/core';
import { PostTagDirective } from '../../directives/post-tag.directive';
import { NotionBlock, NotionDatabaseItem } from '../../types';

@Component({
    selector: 'ngx-notion-database-item',
    standalone: true,
    imports: [CommonModule, PostTagDirective],
    templateUrl: './database-item.component.html',
    styleUrl: './database-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseItemComponent implements OnInit {
    public prefetchPageElements = output<string>();
    private cdr = inject(ChangeDetectorRef);
    public databaseItem = input.required<NotionDatabaseItem>();
    public clicked = output<NotionDatabaseItem['id']>();
    public destroyRef = inject(DestroyRef);

    //TODO!  tipar
    public itemBlocks = [];
    public blockPage = signal<NotionBlock | null>(null);
    public isLoaded = signal(false);

    imgSrc = signal<string>('');

    ngOnInit() {
        console.log('-')
        // this.notionService.getPageElements(this.databaseItem().id).then(items => items.forEach(item => {
        //   if (item.format?.page_cover) {
        //     this.blockPage.set(item)
        //     this.imgSrc.set(getBlockImageURL(this.blockPage()!.format!.page_cover!, this.blockPage()!));
        //   }
        // }))
    }

    setLoad() {
        this.isLoaded.set(true);
        this.cdr.detectChanges();
    }
}
