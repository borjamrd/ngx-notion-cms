import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CacheService<T> {
    private cache = new Map<string, { data: T; expiry: number }>();
    public cache$ = new BehaviorSubject<T | null>(null);

    //Todo export to settings.service
    private readonly CACHE_DURATION = 1000 * 60 * 60;

    set(key: string, data: T): void {
        const expiry = Date.now() + this.CACHE_DURATION;
        this.cache.set(key, { data, expiry });
        this.cache$.next(data);
    }

    get(key: string): T | undefined {
        const cached = this.cache.get(key);
        if (cached && Date.now() < cached.expiry) {
            this.cache$.next(cached.data);
            return cached.data;
        } else if (cached) {
            this.clear(key);
        }
        this.cache$.next(null);
        return undefined;
    }

    clear(key: string): void {
        this.cache.delete(key);
        this.cache$.next(null);
    }

    clearExpired(): void {
        const now = Date.now();
        for (const [key, value] of this.cache.entries()) {
            if (now >= value.expiry) {
                this.clear(key);
            }
        }
    }
}
