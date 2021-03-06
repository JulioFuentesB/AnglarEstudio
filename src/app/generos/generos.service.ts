import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + 'generos';

  public obtenerPaginado(
    pagina: number,
    cantidadRegistrosAMostrar: number
  ): Observable<any> {
    //return [{ id : 1, nombre: 'Drama' }];

    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append(
      'recordsPorPagina',
      cantidadRegistrosAMostrar.toString()
    );
    return this.http.get<generoDTO[]>(this.apiUrl, {
      observe: 'response',
      params,
    });
  }


  public obtenerTodos(){
    return this.http.get<generoDTO[]>(`${this.apiUrl}/todos`);
  }
  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiUrl, genero);
  }

  public obtenerPorId(id: number): Observable<generoDTO> {
    return this.http.get<generoDTO>(`${this.apiUrl}/${id}`);
  }

  public editar(id: number, genero: generoCreacionDTO) {
    return this.http.put(`${this.apiUrl}/${id}`, genero);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
