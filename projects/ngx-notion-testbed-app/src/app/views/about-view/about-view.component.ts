import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NotionPageComponent } from 'ngx-notion-cms';

@Component({
    selector: 'app-about-view',
    standalone: true,
    imports: [CommonModule, NotionPageComponent],
    templateUrl: './about-view.component.html',
    styleUrl: './about-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutViewComponent {

    private title = inject(Title);
    private meta = inject(Meta)

    ngOnInit(): void {
        this.title.setTitle('About ngx-notion-cms');
        this.meta.updateTag({ name: 'og:title', content: 'ngx-notion-cms' });
        this.meta.updateTag({ name: 'description', content: 'unofficial Notion renderer for Angular' });
        this.meta.updateTag({ name: 'keywords', content: 'Angular, Notion, CMS, Blog' });
        this.meta.updateTag({ name: 'og:image', content: '/public/notion-cms-og.png' })
    }
}
