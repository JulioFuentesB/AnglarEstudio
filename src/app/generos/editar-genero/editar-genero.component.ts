import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent implements OnInit {
  constructor(
    private rutaActivada: ActivatedRoute,
    private router: Router,
    private generosService: GenerosService
  ) {}

  //modelo: generoCreacionDTO = {nombre: 'Drama'};

  modelo: generoCreacionDTO | any;
  errores: string[] = [];

  // ngOnInit(): void {

  //   this.rutaActivada.params.subscribe(params => {
  //    // alert(params.id);
  //   })
  // }

  ngOnInit(): void {
    this.rutaActivada.params.subscribe((params) => {
      this.generosService.obtenerPorId(params.id).subscribe(
        (genero) => {
          this.modelo = genero;
        },
        () => this.router.navigate(['/generos'])
      );
    });
  }

  guardarCambios(genero: generoCreacionDTO) {
    this.generosService.editar(this.modelo.id, genero).subscribe(
      () => {
        this.router.navigate(['/generos']);
      },
      (error) => (this.errores = parsearErroresAPI(error))
    );
    //error => console.error(error))
  }
}
