import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private rutaActivada:ActivatedRoute) { }

  ngOnInit(): void {

    this.rutaActivada.params.subscribe(params => {
     // alert(params.id);
    })
  }

}
