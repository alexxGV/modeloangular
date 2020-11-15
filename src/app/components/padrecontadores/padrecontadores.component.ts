import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padrecontadores',
  templateUrl: './padrecontadores.component.html',
  styleUrls: ['./padrecontadores.component.css']
})
export class PadrecontadoresComponent implements OnInit {

  public numeros: Array<number>;
  public mensaje: string;

  constructor() {
    this.numeros = [5, 19, 34, 2];
  }

  //NECESITAMOS UN METODO PARA RECIBIR EL ID DEL CONTADOR DEL HIJO
  recibirIdContador(event) {
    //UTLIZAMOS EVENT DIRECTEMENTE PORQUE VAMOS A RECIBIR UN NUMERO (idContador)
    this.mensaje = "Contador incrementando" + event;
  }

  ngOnInit(): void {
  }

}
