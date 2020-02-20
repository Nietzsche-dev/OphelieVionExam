import { Injectable } from '@angular/core';
import { Ordinateurs } from '../model/ordinateurs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root'
})
export class OrdinateursService {
  ordinateur: Ordinateurs[];
  marqueDisponible = ['Dell', 'HP', 'Apple', 'Asus'];
  typeOrdinateursDisponible = ['Portable', 'Fixe', 'Tablette hybride'];

  apiUrl = 'http://localhost:3000/ordinateurs';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) {
  }

  getAllOrdinateurs(): Observable<Ordinateurs[]> {

    return this.httpClient.get<Ordinateurs[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  addOrdinateurs(ordinateur: Ordinateurs): Observable<Ordinateurs> {
    return this.httpClient.post<Ordinateurs>(this.apiUrl, ordinateur, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }
  getOrdinateursById(id: number): Observable<Ordinateurs> {
    return this.httpClient.get<Ordinateurs>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  editOrdinateurs(ordinateurToEdit: Ordinateurs): Observable<Ordinateurs> {
    return this.httpClient.put<Ordinateurs>(this.apiUrl + '/' + ordinateurToEdit.id, ordinateurToEdit).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteOrdinateurs(id: number): Observable<Ordinateurs> {
    return this.httpClient.delete<Ordinateurs>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
