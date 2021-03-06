import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorPeliculaDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css'],
})
export class AutocompleteActoresComponent implements OnInit {
  constructor(private actoresService: ActoresService) { }

  control: FormControl = new FormControl();

  actores = [
    {
      nombre: 'Tom Holland',
      personaje: '',
      foto: 'https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg',
    },
    {
      nombre: 'Tom Hanks',
      personaje: '',
      foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    },
    {
      nombre: 'Samuel L. Jackson',
      personaje: '',
      foto: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
  ];

  //actoresOriginal = this.actores;

  //actoresSeleccionados: any[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  actoresAMostrar: actorPeliculaDTO[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];
  //columnasAMostrar = ['imagen'];

  //toma la referencia de la tabla            se agrega que acepte nulos para que no se rebiente la  aplicacion
  @ViewChild(MatTable) table: MatTable<any> | any;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(nombre => {
      if (typeof nombre === 'string' && nombre){
        this.actoresService.obtenerPorNombre(nombre).subscribe(actores => {
          this.actoresAMostrar = actores;
        })
      }
    });
  }
  optionSelected(event: MatAutocompleteSelectedEvent | any) {
    console.log(event.option.value);

    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  eliminar(actor: { nombre: any }) {
    const indice = this.actoresSeleccionados.findIndex(
      (a) => a.nombre === actor.nombre
    );
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(
      (actor) => actor === event.item.data
    );
    moveItemInArray(
      this.actoresSeleccionados,
      indicePrevio,
      event.currentIndex
    );
    this.table.renderRows();
  }
}
