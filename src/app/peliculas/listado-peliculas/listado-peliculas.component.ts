import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent implements OnInit {
  constructor() {}
  @Input()

  // peliculas:
  //   | {

  //       precio: number;


  //       titulo: string;
  //       resumen: string;
  //       enCines: boolean;
  //       fechaLanzamiento: Date;
  //       trailer: string
  //       poster: string

  //     }[]
  //   | any;

    peliculas:PeliculaDTO[] | any;

  ngOnInit(): void {}

  //remover las peliculas una a una
  // remover(indicePelicula: number): void {
  //   this.peliculas?.splice(indicePelicula,1);
  //   //   //this.peliculas.splice(indicePelicula, 1);
  //   }

  remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }
}
