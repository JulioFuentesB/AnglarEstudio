import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {


  constructor(private rutaActivada:ActivatedRoute) { }

  ngOnInit(): void {

    this.rutaActivada.params.subscribe(params => {
     // alert(params.id);
    })
  }

}
