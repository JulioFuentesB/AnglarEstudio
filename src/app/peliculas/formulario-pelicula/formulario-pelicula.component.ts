import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  //form: FormGroup | any;
  form: FormGroup | any;

  @Input()
  errores: string[] = [];
  @Input()
  modelo: PeliculaDTO | any;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  //inventados
  @Input()
  generosNoSeleccionados: MultipleSelectorModel[] | any;
  @Input()
  generosSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[] | any;
  @Input()
  cinesSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  imagenCambiada = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosIds: '',
      cinesIds: '',
      actores: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  // changeMarkdown(texto) {
  //   this.form.get('resumen').setValue(texto);
  // }

  //envia la informacion del formulario al componente padre o quien lo llama
  guardarCambios() {
    debugger;
    const generosIds = this.generosSeleccionados.map((val) => val.llave);
    this.form.get('generosIds').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map((val) => val.llave);
    this.form.get('cinesIds').setValue(cinesIds);

    const actores = this.actoresSeleccionados.map((val) => {
      return { id: val.id, personaje: val.personaje };
    });
    this.form.get('actores').setValue(actores);

    //this.form.get('foto').setValue(file);

    if (!this.imagenCambiada) {
      this.form.patchValue({ poster: null });
    }

    this.OnSubmit.emit(this.form.value);
  }
}
