export interface actorDTO {
  id:number;
  nombre: string;
  fechaNacimiento: Date;
  biografia:string;
  foto:string;//guarda la url de la foto y no el archivo como tal

}


export interface actorCreacionDTO {
  nombre: string;
  fechaNacimiento: Date;
  biografia: string;
   foto:File;

}


export interface actorPeliculaDTO {
  id: number;
  nombre: string;
  personaje: string;
  foto: string
}
