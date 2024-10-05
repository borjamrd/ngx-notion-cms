import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxNotionDatabaseComponent, NotionDatabaseItem } from 'ngx-notion-cms';

@Component({
    selector: 'app-posts-view',
    standalone: true,
    imports: [NgxNotionDatabaseComponent, RouterModule],
    templateUrl: './posts-view.component.html',
    styleUrl: './posts-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsViewComponent {
    private router = inject(Router);
    setPageItemSelected(id: NotionDatabaseItem['id']) {
        this.router.navigate(['posts', id]);
    }
}
