import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { NotionBlock } from './../types';
import { NotionHttpService } from './http-notion.service';

@Injectable({
    providedIn: 'root',
})
export class NgxNotionService {
    private http = inject(NotionHttpService);

    /**
     * Fetches the items of a Notion database by its ID.
     *
     * @param {string} id - The ID of the Notion database to fetch the items for.
     * @returns {Observable<{ data: NotionDatabaseItem[] | null, error: string | null, isPending: boolean }>}
     * An observable that emits an object containing the database items data, an error message, and a pending status.
     * The database items data is an array of NotionDatabaseItem if available, otherwise null.
     * The error is null if no error occurred, otherwise a string describing the error.
     * The isPending indicates if the request is still in progress.
     */
    public getDatabaseItemsById(id: string) {
        return this.http.get<any[]>(
            `https://notion-api.splitbee.io/v1/table/${id}`
        )
    }

/**
 * Fetches and processes the blocks of a Notion page by its ID.
 *
 * @param {string} id - The ID of the Notion page to fetch the blocks for.
 * @returns {Observable<{ data: NotionBlock[] | null, error: string | null, isPending: boolean }>}
 * An observable that emits an object containing the blocks data, an error message, and a pending status.
 * The blocks data is an array of NotionBlock if available, otherwise null.
 * The error is null if no error occurred, otherwise a string describing the error.
 * The isPending indicates if the request is still in progress.
 */
    public getPageBlocks(id: string) {
        return this.http
            .get<NotionBlock[]>(`https://notion-api.splitbee.io/v1/page/${id}`)
            .pipe(
                map(response => {
                    const blocks: NotionBlock[] = [];
                    if (response.data) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        Object.values(response.data).forEach((key: any) => {
                            if (key.value) {
                                console.log(key.value);
                                blocks.push(key.value);
                            }
                        });
                        return {
                            data: blocks,
                            error: null,
                            isPending: false,
                        };
                    } else if (response.isPending) {
                        return {
                            data: null,
                            error: null,
                            isPending: true,
                        };
                    } else {
                        return {
                            data: null,
                            error: 'No data found',
                            isPending: false,
                        };
                    }
                })
            );
    }

}
