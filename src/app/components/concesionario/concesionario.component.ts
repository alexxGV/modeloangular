import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {

  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 320, 30, false),
      new Coche("a8", "Audi", 0, 180, 10, false),
      new Coche("batmovil", "DC COMICS", 0, 500, 80, false)
    ]
  }

  ngOnInit(): void {
  }

}
