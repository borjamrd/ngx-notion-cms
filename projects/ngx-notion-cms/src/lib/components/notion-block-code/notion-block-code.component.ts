import { Component, inject, Input, OnInit } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { NotionBlock } from '../../types/block.type'

@Component({
  selector: 'ngx-notion-block-code',
  standalone: true,
  imports: [HighlightAuto],
  templateUrl: './notion-block-code.component.html',
  styleUrl: './notion-block-code.component.scss'
})
export class NotionBlockCodeComponent implements OnInit {

  codeForHighlight: string = ''
  languange: string = ''
  @Input() notionBlock!: NotionBlock


  ngOnInit(): void {
    if (this.notionBlock.properties?.language) {
      this.languange = this.notionBlock.properties.language[0][0]
      this.codeForHighlight = this.notionBlock.properties.title[0][0]
    }


  }

}
