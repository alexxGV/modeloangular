import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
//DEBEMOS IMPORTAR PARA INYECTARLOS Y PODER COGER LOS PARAMETROS
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  public numero: number;
  public numeros: Array<number>;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router) {
    this.numeros = [];
  }

  collatz(num) {
    console.log("Dentro del colatz");
    this.numeros = [];
    this.numeros.push(num);
    while (num != null && num > 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      this.numeros.push(num);
    }
  }


  ngOnInit(): void {
    //COGEMOS LOS PARAMETROS VIENE DENTRO DENTRO DE LA INYECCION
    this._activeRoute.params.subscribe((params: Params) => {
      if (params.numero != null) {
        this.numero = parseInt(params.numero);
        console.log("Numero : " + this.numero);
        this.collatz(this.numero);
      }
    });

  }

}
