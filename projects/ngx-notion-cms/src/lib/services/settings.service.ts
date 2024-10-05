import { Inject, Injectable } from '@angular/core';
import { GlobalSettings } from '../types/settings.type';
import { GlobalSettingsConfig } from '../utils/settings.config';
import { GLOBAL_SETTINGS_TOKEN } from '../providers';



@Injectable({
    providedIn: 'root',
})
export class NgxSettingService {
    private _globalSettings: GlobalSettings;

    constructor(@Inject(GLOBAL_SETTINGS_TOKEN) private config: GlobalSettingsConfig) {
        this._globalSettings = this.config.globalSettings;
    }

    /**
     * Establece las configuraciones globales.
     * @param settings - Un objeto parcial de GlobalSettings que contiene las configuraciones a actualizar.
     */
    setGlobalSettings(settings: Partial<GlobalSettings>): void {
        this._globalSettings = { ...this._globalSettings, ...settings };
    }

    getGlobalSettings(): GlobalSettings {
        return this._globalSettings;
    }
}
