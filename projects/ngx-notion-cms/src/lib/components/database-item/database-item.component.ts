import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, effect, inject, input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PostTagDirective } from '../../directives/post-tag.directive';
import { NotionBlock, NotionDatabaseItem } from '../../types';
import { getBlockImageURL } from '../../utils/utils';
import { NgxNotionService } from '../../services/notion.service';

@Component({
  selector: 'ngx-notion-database-item',
  standalone: true,
  imports: [
    CommonModule,
    PostTagDirective,
  ],
  templateUrl: './database-item.component.html',
  styleUrl: './database-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseItemComponent {


  public prefetchPageElements = output<string>()
  private ngxNotionService = inject(NgxNotionService)
  private cdr = inject(ChangeDetectorRef)
  public databaseItem = input.required<NotionDatabaseItem>()
  public clicked = output<NotionDatabaseItem['id']>()
  public destroyRef = inject(DestroyRef)

  //TODO!  tipar
  public itemBlocks = []
  public blockPage = signal<NotionBlock | null>(null)
  public isLoaded = signal(false)

  imgSrc = signal<string>('');

  ngOnInit() {
    // this.notionService.getPageElements(this.databaseItem().id).then(items => items.forEach(item => {
    //   if (item.format?.page_cover) {
    //     this.blockPage.set(item)
    //     this.imgSrc.set(getBlockImageURL(this.blockPage()!.format!.page_cover!, this.blockPage()!));
    //   }
    // }))


  }

  setLoad() {
    this.isLoaded.set(true)
    this.cdr.detectChanges()
  }

}
