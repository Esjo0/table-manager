import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email', 'phone_number']; // Adjust columns as needed
  dataSource = new MatTableDataSource<any>();

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.loadData();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }

  loadData(): void {
    const page = this.paginator.pageIndex + 1;
    const limit = this.paginator.pageSize;

    this.apiService.fetchPaginatedData(page, limit).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
