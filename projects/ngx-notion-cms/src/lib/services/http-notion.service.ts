import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, startWith } from "rxjs";

export interface IHttpNotionResponse<T> { data: T | null, error: any | null, isPending: boolean }
export type INgxNotionResponse<T> = Observable<IHttpNotionResponse<T>>

export interface IHttpNotionService {
    get<T>(url: string): Observable<IHttpNotionResponse<T>>;
}


@Injectable({
    providedIn: 'root',
})
export class NotionHttpService implements IHttpNotionService {

    constructor(private http: HttpClient) { }

    get<T>(url: string): INgxNotionResponse<T> {
        return this.http.get<T>(url).pipe(
            map(data => ({ data, error: null, isPending: false })),
            catchError(error => of({ data: null, error, isPending: false })),
            startWith({ data: null, error: null, isPending: true })
        );
    }
}
