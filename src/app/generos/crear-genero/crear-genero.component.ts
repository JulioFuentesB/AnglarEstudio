import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent {
  constructor(private roter: Router, private generosServices: GenerosService) {}

  //en memoria
  // guardarCambios(genero: generoCreacionDTO) {
  //   //..guaradar los cambios
  //   console.log(genero);

  //   this.roter.navigate(['/generos']);
  // }

  //base de datos
  guardarCambios(genero: generoCreacionDTO) {
    this.generosServices.crear(genero).subscribe(
      () => {
        this.roter.navigate(['/generos']);
      },
      (error) => console.log(genero)
    );
  }
}
