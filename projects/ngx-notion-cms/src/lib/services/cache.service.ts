import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalSettingsConfig } from '../utils/settings.config';
import { GLOBAL_SETTINGS_TOKEN } from '../providers';

@Injectable({
    providedIn: 'root',
})
export class CacheService<T> {
    private cache = new Map<string, { data: T; expiry: number }>();
    public cache$ = new BehaviorSubject<T | null>(null);

    private readonly STORE_IN_CACHE = true

    constructor(@Inject(GLOBAL_SETTINGS_TOKEN) private config: GlobalSettingsConfig) {
        this.STORE_IN_CACHE = this.config.globalSettings.cacheOptions.storeInCache || this.STORE_IN_CACHE;
    }

    set(key: string, data: T): void {
        const cacheDuration = this.config.globalSettings.cacheOptions.stateTime
        const expiry = Date.now() + cacheDuration!;
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
