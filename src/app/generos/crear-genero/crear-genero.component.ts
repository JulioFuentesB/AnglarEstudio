import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent implements OnInit {
  constructor(private roter: Router, private formBuilder: FormBuilder) {}

  form: FormGroup | any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)]
        },
      ],
    });
  }

  guardarCambios() {
    //..guaradar los cambios

    this.roter.navigate(['/generos']);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo es requerido';
    }

    if (campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres'
    }

    // if (campo.hasError('primeraLetraMayuscula')){
    //   return campo.getError('primeraLetraMayuscula').mensaje;
    // }


    return '';
  }
}
