import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { CharactersComponent } from './characters/characters.component';
import { MonstersComponent } from './monsters/monsters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ActorsComponent } from './actors/actors.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MaterialModule} from './material/material.module';
import { ProductosComponent } from './productos/productos.component'
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SynopsisComponent,
    CharactersComponent,
    MonstersComponent,
    HeaderComponent,
    ActorsComponent,
    ProductosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule

    // MatToolbarModule,
    // MatIconModule,
    // MatTableModule,
    // MatButtonModule
  ],
   exports:[
     MatToolbarModule,
      MatIconModule,
     MatTableModule,
     MatButtonModule
   ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
