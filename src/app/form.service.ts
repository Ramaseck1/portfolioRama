import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:3000/api/form';

  constructor(private http: HttpClient) {}  // Ensure HttpClient is imported

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}