
import {
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  signal,
  DOCUMENT
} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    themeSignal = signal<string>('light');

    document: Document = inject(DOCUMENT);
    private _renderer2: Renderer2;

    constructor() {
        const rendererFactory = inject(RendererFactory2);

        this._renderer2 = rendererFactory.createRenderer(null, null);
        this.setTheme(this.themeSignal());
    }

    setTheme(theme: string) {
        this._renderer2.addClass(this.document.body, theme);
        this.themeSignal.set(theme);
    }

    updateTheme() {
        this._renderer2.removeClass(
            this.document.body,
            this.themeSignal() === 'dark' ? 'dark' : 'light'
        );
        this._renderer2.addClass(
            this.document.body,
            this.themeSignal() === 'dark' ? 'light' : 'dark'
        );
        this.themeSignal.update(value => (value === 'dark' ? 'light' : 'dark'));
    }
}
