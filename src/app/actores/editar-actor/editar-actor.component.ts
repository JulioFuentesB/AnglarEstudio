import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private rutaActivada:ActivatedRoute) { }

  modelo:actorDTO ={nombre:'Julio',fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg',biografia:''}

  ngOnInit(): void {

    this.rutaActivada.params.subscribe(params => {
     // alert(params.id);
    })
  }

  guardarCambios(actor:actorCreacionDTO)
  {
    console.log(actor);
  }

}
