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

  // Obtener detalles de un Pokémon por ID
  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del cliente:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(`Código del servidor: ${error.status}\nMensaje: ${error.message}`);
    }
    return throwError('Hubo un problema al procesar la solicitud. Intenta nuevamente más tarde.');
  }
}
