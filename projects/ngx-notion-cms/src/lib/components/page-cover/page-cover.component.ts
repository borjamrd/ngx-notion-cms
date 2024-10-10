import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, OnInit, signal } from '@angular/core';
import { NotionBlock } from '../../types';
import { getBlockImageURL } from '../../utils/utils';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'ngx-page-cover',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './page-cover.component.html',
  styleUrl: './page-cover.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageCoverComponent {
  notionBlockSignal = input.required<NotionBlock>({ 'alias': 'notionBlock' })
  imgSrc = computed(() => {
    if (this.notionBlockSignal().type && this.notionBlockSignal()?.format?.page_cover) {
      return getBlockImageURL(this.notionBlockSignal().format!.page_cover!, this.notionBlockSignal()!)
    }
    return ''
  })


}
