/**
 * Cache configuration.
 * @property {boolean} showCache - Indicates whether the cache should be shown or not.
 * @property {boolean} staleTime - Time at which the cache is considered stale. If `true`, the cache will be invalidated and updated automatically after a defined period.
 */
interface CacheOptions {
    storeInCache: boolean;
    stateTime?: number;
}

/**
 * Global configuration that affects the entire application.
 * @property {CacheOptions} cacheOptions - Options related to cache handling.
 */
export interface GlobalSettings {
    cacheOptions: Partial<CacheOptions>;
    database: Partial<DatabaseSettings>;
    page: Partial<PageSettings>;
}

/**
 * Specific configuration for the database.
 */
export interface DatabaseSettings {
    showImage: boolean;
}

/**
 * Specific configuration for the application's pages.
 */
export interface PageSettings {
    showTableOfContents: boolean;
}
