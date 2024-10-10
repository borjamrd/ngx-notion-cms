import { mergeDeep } from './../utils/utils';
import { InjectionToken, Provider } from "@angular/core";
import { GlobalSettings } from "../types/settings.type";
import { GlobalSettingsConfig } from "../utils/settings.config";

export const GLOBAL_SETTINGS_TOKEN = new InjectionToken<GlobalSettings>('GlobalSettingsToken');

export const defaultGlobalSettings: GlobalSettings = {
    cacheOptions: {
        storeInCache: true,
        stateTime: 1000 * 60 * 60
    },
    database: {
        showImage: true,
    },
    page: {
        showTableOfContents: true
    }

}
export function globalSettingsProvider(settings: Partial<GlobalSettings>): Provider {


    return {
        provide: GLOBAL_SETTINGS_TOKEN,
        useFactory: () => {
            return new GlobalSettingsConfig(mergeDeep(defaultGlobalSettings, settings));
        },
    };
}