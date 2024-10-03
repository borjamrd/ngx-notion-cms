import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, inject, OnInit, SimpleChanges, OnChanges, signal, ChangeDetectorRef } from '@angular/core';
import { NotionBlock, NotionDatabaseItem } from '../../types';
import { NgxNotionService } from '../../services/notion.service'
import { INgxNotionResponse } from '../../services/http-notion.service';
import { NotionBlockComponent } from "../notion-block/notion-block.component";
import { map, Observable } from 'rxjs';
import { NotionTableOfContentsComponent } from '../table-of-contents/notion-table-of-contents.component';
import { LayoutContainerComponent } from "../layout-container/layout-container.component";

const pageBlocks: NotionBlock[] = []
@Component({
  selector: 'ngx-notion-page',
  standalone: true,
  imports: [
    CommonModule,
    NgTemplateOutlet,
    NotionBlockComponent,
    NotionTableOfContentsComponent,
    LayoutContainerComponent
  ],
  templateUrl: './notion-page.component.html',
  styleUrl: './notion-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionPageComponent implements OnInit {


  private ngxNotionService: NgxNotionService = inject(NgxNotionService);

  public pageId = input.required<string>();
  public iconPage = signal<string | undefined>(undefined)

  //TODO  tipar
  public notionBlocksQuery!: INgxNotionResponse<NotionBlock[]>
  // INgxNotionResponse<any>
  private cdr = inject(ChangeDetectorRef);


  ngOnInit(): void {
    this.notionBlocksQuery = this.ngxNotionService.getPageBlocks(this.pageId())
  }

  getchildContent(id: string): Observable<NotionBlock | undefined> {
    return this.notionBlocksQuery.pipe(
      map(query => {
        // Verificar si hay datos disponibles
        if (query && query.data) {
          return query.data.find(block => block.id === id) as NotionBlock;
        }
        return undefined; // Retorna undefined si no hay datos
      })
    );
  }

  scrollToBlock(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.cdr.detectChanges();
    }
  }
}
