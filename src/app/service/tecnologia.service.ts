import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TecnologiaService {
  private baseUrl = 'http://localhost:8771/rest/api/tecnologie';

  constructor(private http: HttpClient) {}

  inserisciTecnologia(tecnologia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/nuova-tecnologia`, tecnologia);
  }

  leggiCategorie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lettura-categorie`);
  }
}
