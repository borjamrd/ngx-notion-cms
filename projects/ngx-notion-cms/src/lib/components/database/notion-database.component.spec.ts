import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from '../layout-container/layout-container.component';
import { NotionDatabaseComponent } from './notion-database.component';

import { NgxNotionService } from '../../services/notion.service';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('NotionDatabaseComponent', () => {
    let component: NotionDatabaseComponent;
    let fixture: ComponentFixture<NotionDatabaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NotionDatabaseComponent,
                CommonModule,
                LayoutContainerComponent,
            ],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {
                    provide: NgxNotionService,
                    useValue: { getDatabaseItemsById: jest.fn() },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(NotionDatabaseComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('dataBaseId', 'dummy-id');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
