
// import { NotionBlockCodeComponent } from './notion-block-code.component';
// import { HighlightAuto, provideHighlightOptions } from 'ngx-highlightjs';

// describe('NotionBlockCodeComponent', () => {
//     let component: NotionBlockCodeComponent;
//     let fixture: ComponentFixture<NotionBlockCodeComponent>;

//     beforeEach(async () => {

//         spyOn<any>(import('highlight.js'), 'then').and.returnValue(Promise.resolve({}));
//         spyOn<any>(import('ngx-highlightjs/line-numbers'), 'then').and.returnValue(Promise.resolve({}));

//         await TestBed.configureTestingModule({
//             imports: [NotionBlockCodeComponent, HighlightAuto, Highlight],
//             providers: [
//                 provideHighlightOptions({
//                     fullLibraryLoader: () => import('highlight.js'),
//                     lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
//                 }),
//             ],

//         }).compileComponents();

//         fixture = TestBed.createComponent(NotionBlockCodeComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     // it('should create', () => {
//     //     expect(component).toBeTruthy();
//     // });
// });
