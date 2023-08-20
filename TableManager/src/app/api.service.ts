import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://random-data-api.com/api/v2/users?size=100&response_type=json';

  constructor(private http: HttpClient) {}

  fetchData(page: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }
}
