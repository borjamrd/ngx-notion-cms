import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotionDatabase } from './ngx-notion-database.component';

describe('NgxNotionCmsComponent', () => {
  let component: NgxNotionDatabase;
  let fixture: ComponentFixture<NgxNotionDatabase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNotionDatabase]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxNotionDatabase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
