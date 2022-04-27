import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';
import { HttpResponse } from '@angular/common/http';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css'],
})
export class IndiceCinesComponent implements OnInit {

  constructor(private cinesService: CinesService) {}

  cines: cineDTO[] | any;
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRgistros(pagina: number, cantidadElementosAMostrar: number) {
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<cineDTO[]>) => {
        this.cines = respuesta.body;
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
    this.cinesService.borrar(id).subscribe(
      () => {
        this.cargarRgistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }
}
