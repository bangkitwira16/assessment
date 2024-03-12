import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IItem } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items'; // Update with your JSON server URL

  constructor(private http: HttpClient) {}

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.apiUrl).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
