import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { NotionBlock, NotionDatabaseItem } from './../types';
import { NotionHttpService } from './http-notion.service';

@Injectable({
    providedIn: 'root',
})
export class NgxNotionService {
    private http = inject(NotionHttpService);

    public getDatabaseItemsById(id: string) {
        return this.http.get<NotionDatabaseItem[]>(
            `https://notion-api.splitbee.io/v1/table/${id}`
        );
    }

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
