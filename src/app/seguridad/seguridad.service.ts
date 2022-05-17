import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  credencialesUsuario,
  respuestaAutenticacion,
  usuarioDTO,
} from './seguridad';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  constructor(private httpClient: HttpClient) {}
  apiURL = environment.apiUrl + 'cuentas';
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';
  private readonly campoRol = 'role';

  estaLogueado(): boolean {
    return false;
  }

  obtenerRol(): string {
    return 'admin';
  }

  registrar(
    credenciales: credencialesUsuario
  ): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(
      this.apiURL + '/crear',
      credenciales
    );
  }

  login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(
      this.apiURL + '/login',
      credenciales
    );
  }
}
