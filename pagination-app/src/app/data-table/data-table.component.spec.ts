import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  const mockApiService = {
    fetchPaginatedData: jasmine.createSpy('fetchPaginatedData').and.returnValue(of([]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [MatTableModule, MatPaginatorModule],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ApiService.fetchPaginatedData on ngAfterViewInit', () => {
    component.paginator = {
      pageIndex: 0,
      pageSize: 10
    } as any;

    component.ngAfterViewInit();
    expect(mockApiService.fetchPaginatedData).toHaveBeenCalledWith(1, 10);
  });
});
