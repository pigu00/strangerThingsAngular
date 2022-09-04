import { Component } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent  {
  
  public monsters:string[] = ['Demogorgon','Mind Flyers',
  'Vecna']
  
  public currentMonster="";
  public baseUrl= "../../assets/"
  public currentUrl = this.baseUrl + this.currentMonster + ".jpg"

  
}
