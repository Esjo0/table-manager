import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://random-data-api.com/api/v2'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  fetchPaginatedData(page: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}/users?size=100&page=${page}&limit=${limit}`;
    console.log(url);
    return this.http.get(url);
  }
}
