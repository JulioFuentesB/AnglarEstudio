import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent implements OnInit {
  constructor(private roter: Router) {}

  ngOnInit(): void {}

  guardarCambios() {
    //..guaradar los cambios

    this.roter.navigate(['/generos']);
  }
}
