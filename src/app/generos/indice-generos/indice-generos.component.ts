import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css'],
})
export class IndiceGenerosComponent implements OnInit {
  constructor(private generosService: GenerosService) {}

  generos: generoDTO[] | any;
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
    this.generosService
      .obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<generoDTO[]>) => {
          this.generos = respuesta.body;
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
    this.generosService.borrar(id).subscribe(() => {
      this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error=>console.error(error));
  }
}
