import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {



  constructor(private rutaActivada:ActivatedRoute) { }

  ngOnInit(): void {

    this.rutaActivada.params.subscribe(params => {
     // alert(params.id);
    })
  }

}
