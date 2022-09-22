import { Component } from '@angular/core';



export interface PeriodicElement {
  actor: string;
  character: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { actor: 'Winona Ryder', character: 'Joyce Byers' },
    { actor: 'David Harbour', character: 'Jim Hopper' },
    { actor: 'Millie Bobby', character: 'Brown ,Once' },
    { actor: 'Finn Wolfhard', character: 'Mike Wheeler' },
    { actor: 'Gaten Matarazzo', character: 'Dustin Henderson' },
    { actor: 'Caleb McLaughlin', character: 'Lucas Sinclair' },
    { actor: 'Noah Schnapp', character: 'Will Byers' },
    { actor: 'Natalia Dyer', character: 'Nancy Wheeler' },
    { actor: 'Joe Keery', character: 'Steve Harrington' },
    { actor: 'Charlie Heaton', character: 'Jonathan Byers' },
    { actor: 'Cara Buono', character: 'Karen Wheeler' },
    { actor: 'Matthew Modine', character: 'Dr. Martin Brenner' },
];

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  displayedColumns: string[] = ['actor', 'character'];
  dataSource = ELEMENT_DATA;
}

