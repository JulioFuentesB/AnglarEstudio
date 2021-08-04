import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {


  constructor(private rutaActivada:ActivatedRoute,private roter: Router) { }

  modelo: generoCreacionDTO = {nombre: 'Drama'};
  // ngOnInit(): void {

  //   this.rutaActivada.params.subscribe(params => {
  //    // alert(params.id);
  //   })
  // }

  ngOnInit(): void {
  }

  guardarCambios(genero: generoCreacionDTO) {
    //..guaradar los cambios
    console.log(genero);

    this.roter.navigate(['/generos']);
  }

}
