import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { INgxNotionResponse } from '../../services/http-notion.service';
import { NgxNotionService } from '../../services/notion.service';
import { NotionDatabaseItem } from '../../types';
import { DatabaseItemComponent } from '../database-item/database-item.component';
import { LayoutContainerComponent } from '../layout-container/layout-container.component';

export type TableType = 'projects' | 'blog';
export type TableSize = 'xs' | 'sm' | 'm' | 'l' | 'xl';

export interface TableOptions {
    size: TableSize;
}

@Component({
    selector: 'ngx-notion-database',
    standalone: true,
    imports: [DatabaseItemComponent, CommonModule, LayoutContainerComponent],
    templateUrl: './ngx-notion-database.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxNotionDatabaseComponent implements OnInit {
    public dataBaseId = input.required<string>();
    public tableItems = signal<NotionDatabaseItem[]>([]);
    public tableType = input<TableType>('blog');

    public itemSelected = output<NotionDatabaseItem['id']>();
    private ngxNotionService = inject(NgxNotionService);
    public tableItemsQuery!: INgxNotionResponse<NotionDatabaseItem[]>;

    ngOnInit(): void {
        this.tableItemsQuery = this.ngxNotionService.getDatabaseItemsById(
            this.dataBaseId()
        );


    }

    goToPage(id: NotionDatabaseItem['id']) {
        this.itemSelected.emit(id);
    }

}
