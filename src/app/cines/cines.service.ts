import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cineCreacionDTO, cineDTO } from './cine';
import { Observable } from 'rxjs';

type NewType = Observable<any>;

@Injectable({
  providedIn: 'root',
})
export class CinesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + 'Cines';

  // public obtenerTodos(
  //   pagina: number,
  //   cantidadRegistrosAMostrar: number
  // ): NewType {
  //   //return [{ id : 1, nombre: 'Drama' }];

  //   let params = new HttpParams();
  //   params = params.append('pagina', pagina.toString());
  //   params = params.append(
  //     'recordsPorPagina',
  //     cantidadRegistrosAMostrar.toString()
  //   );
  //   return this.http.get<cineDTO[]>(this.apiUrl, {
  //     observe: 'response',
  //     params,
  //   });
  // }

  public crear(genero: cineCreacionDTO) {
    return this.http.post(this.apiUrl, genero);
  }

  public obtenerPorId(id: number): Observable<cineDTO> {
    return this.http.get<cineDTO>(`${this.apiUrl}/${id}`);
  }

  // public editar(id: number, genero: generoCreacionDTO) {
  //   return this.http.put(`${this.apiUrl}/${id}`, genero);
  // }

  // public borrar(id: number) {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
