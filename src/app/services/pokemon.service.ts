import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=100`).pipe(catchError(this.handleError));
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Error', error.error.message);
    } else {
      console.error(`Error Code: ${error.status}\n Message: ${error.message}`);
    }
    return throwError('An error occured, please try later');
  }
}
