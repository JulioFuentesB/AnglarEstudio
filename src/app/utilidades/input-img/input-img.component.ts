import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}


  imagenBase64: string |any;



  @Input()
  urlImagenActual: string | any ;


  //varible de salida para enviar la imagen al formulario
  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {}

  //cargar el archivo en memoria y convertirlo a base 64
  change(event: Event| any ): void {
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value) => this.imagenBase64 = value)
      .catch(error => console.log(error));

      this.archivoSeleccionado.emit(file);
       this.urlImagenActual = null;//si el usuario selecciona un nueva imagen sera igual a null

      // toBase64(file).then(
      //   data => console.log(data)


    }
  }
}
