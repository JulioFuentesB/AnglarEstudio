import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from './actor';

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + 'actores';

  public obtenerTodos(
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
    return this.http.get<actorDTO[]>(this.apiUrl, {
      observe: 'response',
      params,
    });
  }

  public crear(actor: actorCreacionDTO) {
    console.log('crear actor editar servicio');
    const formData = this.construirFormData(actor);
    debugger;
    return this.http.post(this.apiUrl, formData);
  }

  private construirFormData(actor: actorCreacionDTO): FormData {
    const formData = new FormData();
    console.log(actor);

    formData.append('nombre', actor.nombre);
    if (actor.biografia) {
      formData.append('biografia', actor.biografia);
    }
    if (actor.fechaNacimiento) {
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }

    debugger;
    if (actor.foto) {
      formData.append('foto', actor.foto);
    }

    return formData;
  }

  public obtenerPorId(id: number): Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiUrl}/${id}`);
  }

  public editar(id: number, actor: actorCreacionDTO) {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }


    console.log('editar actor editar servicio');
    debugger;
    const formData = this.construirFormData(actor);
    return this.http.put(`${this.apiUrl}/${id}`, formData,httpOptions);
    //return this.http.post(this.apiUrl, formData);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}