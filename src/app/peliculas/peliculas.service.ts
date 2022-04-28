import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PeliculasPostGet } from './pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + 'peliculas';

  public postGet(): Observable<PeliculasPostGet> {
    return this.http.get<PeliculasPostGet>(`${this.apiUrl}/postget`);
  }

}
