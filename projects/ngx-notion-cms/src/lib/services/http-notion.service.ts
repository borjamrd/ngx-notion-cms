import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { CacheService } from './cache.service';

export interface IHttpNotionResponse<T> {
    data: T | null;
    error: string | null;
    isPending: boolean;
}
export type INgxNotionResponse<T> = Observable<IHttpNotionResponse<T>>;

export interface IHttpNotionService {
    get<T>(url: string): Observable<IHttpNotionResponse<T>>;
}

@Injectable({
    providedIn: 'root',
})
export class NotionHttpService implements IHttpNotionService {
    private cacheService = inject(CacheService);
    private http = inject(HttpClient);

    get<T>(url: string): INgxNotionResponse<T> {
        const cachedData = this.cacheService.get(url);

        if (!cachedData) {
            return this.http.get<T>(url).pipe(
                map(data => {
                    this.cacheService.set(url, data);
                    return {
                        data,
                        error: null,
                        isPending: false,
                    };
                }),
                catchError(error =>
                    of({
                        data: null,
                        error,
                        isPending: false,
                    })
                ),
                startWith({
                    data: null,
                    error: null,
                    isPending: true,
                })
            );
        }
        return of({ data: cachedData, error: null, isPending: false });
    }
}
