import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor(
    private peliculasServices: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  modelo: PeliculaDTO | any;

  errores: string[] = [];
  generosSeleccionados: MultipleSelectorModel[] | any;
  generosNoSeleccionados: MultipleSelectorModel[] | any;
  cinesSeleccionados: MultipleSelectorModel[] | any;
  cinesNoSeleccionados: MultipleSelectorModel[] | any;
  actoresSeleccionados: actorPeliculaDTO[] | any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.peliculasServices.putGet(params.id).subscribe((peliculaPutGet) => {
        this.modelo = peliculaPutGet.pelicula;

        debugger;
        this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(
          (genero) => {
            return <MultipleSelectorModel>{
              llave: genero.id,
              valor: genero.nombre,
            };
          }
        );
        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(
          (genero) => {
            return <MultipleSelectorModel>{
              llave: genero.id,
              valor: genero.nombre,
            };
          }
        );

        this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(
          (cines) => {
            return <MultipleSelectorModel>{
              llave: cines.id,
              valor: cines.nombre,
            };
          }
        );
        this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(
          (cines) => {
            return <MultipleSelectorModel>{
              llave: cines.id,
              valor: cines.nombre,
            };
          }
        );

        this.actoresSeleccionados = peliculaPutGet.actores;
      });
    });
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);

    this.peliculasServices
      .editar(this.modelo.id, pelicula)
      .subscribe(() => this.router.navigate(['/pelicula/' + this.modelo.id]));
  }
}
