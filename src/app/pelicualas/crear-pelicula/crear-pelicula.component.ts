import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO } from 'src/app/peliculas/pelicula';
import { PeliculasService } from 'src/app/peliculas/peliculas.service';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
})
export class CrearPeliculaComponent implements OnInit {
  constructor(private peliculasService: PeliculasService) {}

  errores: string[] = [];
  generosNoSeleccionados: MultipleSelectorModel[] | any;
  cinesNoSeleccionados: MultipleSelectorModel[] | any;

  ngOnInit(): void {
    this.peliculasService.postGet().subscribe(
      (resultado) => {

        this.generosNoSeleccionados = resultado.generos.map((genero) => {
          return <MultipleSelectorModel>{
            llave: genero.id,
            valor: genero.nombre,
          };
        });

        this.cinesNoSeleccionados = resultado.cines.map((cines) => {
          return <MultipleSelectorModel>{
            llave: cines.id,
            valor: cines.nombre,
          };
        });

      },
      (error) => console.error(error)
    );
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }
}
