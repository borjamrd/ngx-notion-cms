import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NotionPageComponent } from 'ngx-notion-cms';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-post-view',
    standalone: true,
    imports: [NotionPageComponent],
    templateUrl: './post-view.component.html',
    styleUrl: './post-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block w-full',
    },
})
export class PostViewComponent {
    route = inject(ActivatedRoute);
    private post$ = this.route.params.pipe(map(params => params['post']));

    //changed to "page" instead of post. For notion will always be a page,
    //but this will be agnostic for the imported content (posts or projects)

    pageId = toSignal(this.post$, { initialValue: '' });
}
