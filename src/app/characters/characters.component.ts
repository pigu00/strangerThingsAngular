import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  public characters = [
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
  ]
}
