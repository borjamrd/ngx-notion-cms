import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NotionBlock } from '../../types';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { NotionBlockTextComponent } from '../notion-block-text/notion-block-text.component';

@Component({
  selector: 'ngx-notion-block-callout',
  standalone: true,
  imports: [
    Nl2brPipe,
    JsonPipe,
    NotionBlockTextComponent
  ],
  templateUrl: './notion-block-callout.component.html',
  styleUrl: './notion-block-callout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockCalloutComponent {

  notionBlock = input.required<NotionBlock>()
}
