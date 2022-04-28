import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

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
  //  = [
  //   { llave: 1, valor: 'Drama' },
  //   { llave: 2, valor: 'Accion' },
  //   { llave: 3, valor: 'Suspenso' },
  //   { llave: 4, valor: 'Comedia' },
  // ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[] | any;
  //  = [
  //   { llave: 1, valor: 'Sambil' },
  //   { llave: 2, valor: 'Agora' },
  //   { llave: 3, valor: 'Acropolis' },

  // ];

  cinesSeleccionados: MultipleSelectorModel[] = [];


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
      generosId:'', //
      cinesId:'',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  //envia la informacion del formulario al componente padre o quien lo llama
  guardarCambios() {
  //  console.log(this.generosNoSeleccionados);

    //pasar al formulario un arreglo de generos no
    const generosIds=this.generosSeleccionados.map(val=> val.llave);
    this.form.get("generosId").setValue(generosIds);


    const cinesIds=this.cinesSeleccionados.map(val=> val.llave);
    this.form.get("cinesId").setValue(cinesIds);


    this.OnSubmit.emit(this.form.value);
  }
}
