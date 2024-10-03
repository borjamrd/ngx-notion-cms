import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    input,
    OnChanges,
    output,
    SimpleChanges,
} from '@angular/core';
import { NotionBlock, TableOfContentsEntry } from '../../types/block.type';
@Component({
    selector: 'ngx-notion-table-of-contents',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notion-table-of-contents.component.html',
    styleUrl: './notion-table-of-contents.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionTableOfContentsComponent implements OnChanges {
    public scrollToBlock = output<string>();
    public blocks = input.required<NotionBlock[]>();
    public tableOfContents: TableOfContentsEntry[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['blocks']) {
            this.generateTableOfContents();
        }
    }

    private generateTableOfContents(): void {
        const indentLevels: Record<string, number> = {
            header: 0,
            sub_header: 1,
            sub_sub_header: 2,
        };

        const toc: TableOfContentsEntry[] = [];

        this.blocks()
            .filter(
                block =>
                    block.type === 'header' ||
                    block.type === 'sub_header' ||
                    block.type === 'sub_sub_header'
            )
            .forEach(block => {
                toc.push({
                    id: block.id,
                    type: block.type,
                    text: block.properties?.title || '',
                    indentLevel: indentLevels[block.type],
                });
            });

        this.adjustIndentLevels(toc);
        this.tableOfContents = toc;
    }

    private adjustIndentLevels(toc: TableOfContentsEntry[]): void {
        const indentLevelStack = [
            {
                actual: -1,
                effective: -1,
            },
        ];

        toc.forEach(tocItem => {
            const { indentLevel: actual } = tocItem;

            while (true) {
                const prevIndent =
                    indentLevelStack[indentLevelStack.length - 1];
                const { actual: prevActual, effective: prevEffective } =
                    prevIndent;

                if (actual > prevActual) {
                    tocItem.indentLevel = prevEffective + 1;
                    indentLevelStack.push({
                        actual,
                        effective: tocItem.indentLevel,
                    });
                    break;
                } else if (actual === prevActual) {
                    tocItem.indentLevel = prevEffective;
                    break;
                } else {
                    indentLevelStack.pop();
                }
            }
        });
    }
}
