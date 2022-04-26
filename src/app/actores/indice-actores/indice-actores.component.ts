import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {


  constructor(private actoresService: ActoresService) {}

  actores: actorDTO[] | any;
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;




  // ngOnInit(): void {
  //   const generos = this.generosService.obtenerTodos();
  //   console.log(generos);
  // }

  ngOnInit(): void {
    this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRgistros(pagina: number, cantidadElementosAMostrar: number) {
    this.actoresService
      .obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<actorDTO[]>) => {
          this.actores = respuesta.body;
          console.log(respuesta.headers.get('cantidadTotalRegistros'));
          this.cantidadTotalRegistros = respuesta.headers.get(
            'cantidadTotalRegistros'
          );
        },
        (error) => console.error(error)
      );
  }

  actualizarPainacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number) {
    this.actoresService.borrar(id).subscribe(() => {
      this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error=>console.error(error));
  }
}
