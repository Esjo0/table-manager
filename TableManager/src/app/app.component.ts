import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TableManager';
  data: any[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.fetchData(this.currentPage, this.pageSize).subscribe(response => {
      this.data = response.data;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadData();
  }
}
