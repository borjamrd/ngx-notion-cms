import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NotionDatabaseComponent, NotionDatabaseItem } from 'ngx-notion-cms';

@Component({
    selector: 'app-posts-view',
    imports: [NotionDatabaseComponent, RouterModule],
    templateUrl: './posts-view.component.html',
    styleUrl: './posts-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsViewComponent {
    private router = inject(Router);
    setPageItemSelected(id: NotionDatabaseItem['id']) {
        this.router.navigate(['posts', id]);
    }
    databaseId = signal<string>('e9c95945794e462d92fe07e34d26b368');
}
