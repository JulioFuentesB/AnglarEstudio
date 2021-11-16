export interface actorDTO {
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
