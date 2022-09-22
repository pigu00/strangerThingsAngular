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
import {MaterialModule} from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    SynopsisComponent,
    CharactersComponent,
    MonstersComponent,
    HeaderComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    // MatToolbarModule,
    // MatIconModule,
    // MatTableModule,
    // MatButtonModule
  ],
  // exports:[
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatTableModule,
  //   MatButtonModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
