import { NotionBlockCodeComponent } from './notion-block-code.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { Highlight } from 'ngx-highlightjs';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

describe('NotionBlockCodeComponent', () => {
    let component: NotionBlockCodeComponent;
    let fixture: ComponentFixture<NotionBlockCodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotionBlockCodeComponent, HighlightAuto, Highlight],
            providers: [
                { provide: DOCUMENT, useValue: document },
                provideHighlightOptions({
                    coreLibraryLoader: () =>
                        Promise.resolve({
                            highlightElement: jest.fn(),
                            highlightAuto: jest.fn(() => ({ value: '' })),
                            highlight: jest.fn(() => ({ value: '' })),
                            configure: jest.fn(),
                            registerLanguage: jest.fn(),
                        }),
                    lineNumbersLoader: () => Promise.resolve(),
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(NotionBlockCodeComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('block', {
            id: 'test-id',
            type: 'code',
            has_children: false,
            code: {
                caption: [],
                rich_text: [
                    {
                        type: 'text',
                        text: { content: 'console.log("hello");', link: null },
                        annotations: {
                            bold: false,
                            italic: false,
                            strikethrough: false,
                            underline: false,
                            code: false,
                            color: 'default',
                        },
                        plain_text: 'console.log("hello");',
                        href: null,
                    },
                ],
                language: 'javascript',
            },
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
