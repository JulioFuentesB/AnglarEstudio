export interface Coordenada {
  latitud: number;
  longitud: number;
}
// principio de herencia
export interface CoordenadaConMensaje extends Coordenada{
  mensaje: string;
}
