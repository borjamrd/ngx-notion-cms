import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    input,
    OnInit,
    output,
    signal
} from '@angular/core';
import { PostTagDirective } from '../../directives/post-tag.directive';
import { NgxSettingService } from '../../services/settings.service';
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
    private cdr = inject(ChangeDetectorRef);
    private settingsService = inject(NgxSettingService)

    public blockPage = signal<NotionBlock | null>(null);
    public clicked = output<NotionDatabaseItem['id']>();
    public databaseItem = input.required<NotionDatabaseItem>();
    public imgSrc = signal<string>('');
    public isLoaded = signal(false);
    public prefetchPageElements = output<string>();
    public showImage = signal<boolean>(false)


    ngOnInit() {
        this.showImage.set(this.settingsService.getGlobalSettings().database.showImage ?? true)
    }

    setLoad() {
        this.isLoaded.set(true);
        this.cdr.detectChanges();
    }
}
