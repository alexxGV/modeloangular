import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {

  public numeros: Array<number>;

  constructor() {
    this.numeros = [];
  }


  numerosRandom() {
    for (let i = 0; i < 10; i++) {
      var num = Math.floor(Math.random() * 100) + 1;
      console.log(num);

      this.numeros.push(num);
    }


  }

  ngOnInit(): void {
    this.numerosRandom();
  }

}
