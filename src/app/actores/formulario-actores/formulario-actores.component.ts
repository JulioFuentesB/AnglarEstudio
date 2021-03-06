import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css'],
})
export class FormularioActoresComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup | any;
  //parametro de entrada del componente
  @Input()
  modelo: actorDTO | any;

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  imagenCambiada = false;

  @Input()
  errores: string[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: '',
      foto: '',
      biografia: '',
    });

    // if (this.modelo !== undefined && this.modelo) {
    //   this.form.patchValue(this.modelo);
    // }

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }

  }

  onSubmit() {
    debugger;
    // if (this.imagenCambiada) {
    //   this.form.patchValue({ foto: null });
    // }

    if (!this.imagenCambiada){
      this.form.patchValue({'foto': null});
    }

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(file: Event | any) {
    this.imagenCambiada = true;
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string) {
    alert('cambio');
    this.form.get('biografia').setValue(texto);
  }
}
