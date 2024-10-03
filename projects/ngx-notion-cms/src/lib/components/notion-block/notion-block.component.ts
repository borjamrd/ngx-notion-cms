import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NotionBlock } from '../../types/block.type';
import { NotionBlockTextComponent } from '../notion-block-text/notion-block-text.component';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { SecureResourceUrlPipe } from '../../pipes/safe-resource-url.pipe';

@Component({
  selector: 'ngx-notion-block',
  standalone: true,
  imports: [
    CommonModule,
    NotionBlockTextComponent,
    Nl2brPipe,
    SecureResourceUrlPipe
  ],
  templateUrl: './notion-block.component.html',
  styleUrl: './notion-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockComponent {

  notionBlock = input.required<NotionBlock>();
  previousBlockType = input<NotionBlock['type']>();

  numberedListPosition = 1
}
