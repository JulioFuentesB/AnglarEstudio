export interface credencialesUsuario {
  email: string;
  password: string;
}

export interface respuestaAutenticacion {
  token: string;
  expires: Date;
}
export interface usuarioDTO{
  id: string;
  email: string;
}
