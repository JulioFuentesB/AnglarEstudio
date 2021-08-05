import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{MatToolbarModule} from  '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button' ;
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'





@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatIconModule, // <-- here
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  imports: [
    CommonModule,



  ]
})
export class MaterialModule { }





