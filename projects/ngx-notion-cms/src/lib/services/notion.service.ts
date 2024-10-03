import { inject, Injectable } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { NotionBlock, NotionDatabaseItem } from './../types';
import { NotionHttpService } from './http-notion.service';


@Injectable({
  providedIn: 'root'
})
export class NgxNotionService {

  private http: NotionHttpService = inject(NotionHttpService);

  public getDatabaseItemsById(id: string) {
    return this.http.get<NotionDatabaseItem[]>(`https://notion-api.splitbee.io/v1/table/${id}`)
    // .pipe(tap((r) => console.log(r.data)))
  }


  public getPageBlocks(id: string) {
    return this.http.get<NotionBlock[]>(`https://notion-api.splitbee.io/v1/page/${id}`).pipe(
      map(response => {
        let blocks: NotionBlock[] = [];
        if (response.data) {
          Object.values(response.data).forEach((key: any) => {
            blocks.push(key.value);
          });
          return { data: blocks, error: null, isPending: false };
        } else if (response.isPending) {
          return { data: null, error: null, isPending: true };
        } else {
          return { data: null, error: 'No data found', isPending: false };
        }
      })
    )
  }


}
