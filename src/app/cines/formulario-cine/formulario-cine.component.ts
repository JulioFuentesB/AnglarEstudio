import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup | any;
  @Input()
  errores: string[] = [];

  //parametro de entrada sera el formulario, mejor dicho el modelo
  @Input()
  modelo: cineCreacionDTO | any;

  //Parametro de salida a elemto principal que sera el formulario
  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  cordenadaInicial: Coordenada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: ['', { validators: [Validators.required] }],
      longitud: ['', { validators: [Validators.required] }],
    });

    if (this.modelo !== undefined) {
      debugger;
      this.form.patchValue(this.modelo);
      this.cordenadaInicial.push({
        latitud: this.modelo.latitud,
        longitud: this.modelo.longitud,
      });
    }
  }

  //esta enviando a elemto principal el formulario
  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

  cordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }
}
