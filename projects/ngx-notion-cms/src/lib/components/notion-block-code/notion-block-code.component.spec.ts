import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionBlockCodeComponent } from './notion-block-code.component';

describe('NotionBlockCodeComponent', () => {
  let component: NotionBlockCodeComponent;
  let fixture: ComponentFixture<NotionBlockCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionBlockCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionBlockCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
