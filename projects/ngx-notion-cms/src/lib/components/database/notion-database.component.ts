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

/**
 * Component to display a Notion database.
 * 
 * @selector notion-database
 * @standalone true - This component is standalone and can be used without being declared in a module.
 * 
 * @description Displays a list of database items from Notion. It fetches the items based on the provided database ID and allows selecting an item, emitting an event when an item is clicked.
 * 
 * @property {string} dataBaseId - Required input property that receives the ID of the Notion database to fetch items from.
 * @property {NotionDatabaseItem[]} tableItems - Signal that holds the list of items retrieved from the database.
 * @property {Output<NotionDatabaseItem['id']>} itemSelected - Event emitted when a database item is selected.
 * @property {INgxNotionResponse<NotionDatabaseItem[]>} tableItemsQuery - Holds the response from the Notion service query for fetching database items.
 * 
 * @method ngOnInit() - Executed when the component is initialized. It calls the Notion service to fetch the database items based on the `dataBaseId`.
 * @method goToPage(id: NotionDatabaseItem['id']) - Emits the `itemSelected` event with the selected item’s ID.
 */
@Component({
    selector: 'ngx-notion-database',
    imports: [DatabaseItemComponent, CommonModule, LayoutContainerComponent],
    templateUrl: './notion-database.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotionDatabaseComponent implements OnInit {
    public dataBaseId = input.required<string>();
    public tableItems = signal<NotionDatabaseItem[]>([]);

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
