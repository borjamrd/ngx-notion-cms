
/**
 * Configuración de la caché.
 * @property {boolean} showCache - Indica si la caché debe mostrarse o no.
 * @property {boolean} staleTime - Tiempo en que la caché se considera obsoleta. Si `true`, la caché se invalidará y se actualizará automáticamente después de un período definido.
 */
interface CacheOptions {
    storeInCache: boolean;
    stateTime?: number;
}


/**
 * Configuración global que afecta a toda la aplicación.
 * @property {CacheOptions} cacheOptions - Opciones relacionadas con el manejo de caché.
 */
export interface GlobalSettings {
    cacheOptions: Partial<CacheOptions>;
    database: Partial<DatabaseSettings>;
    page: Partial<PageSettings>;
    prefetchOnHover: boolean;
}


/**
 * Configuración específica para la base de datos.
 */
export interface DatabaseSettings {
    showImage: boolean;
}



/**
 * Configuración específica para las páginas de la aplicación.
 */
export interface PageSettings {
    showTableOfContents: boolean;
}