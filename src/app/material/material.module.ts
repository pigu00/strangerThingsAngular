import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatTableModule,
    // MatButtonModule
  ]
  ,
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
