import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijocontador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css']
})
export class HijocontadorComponent implements OnInit {

  @Input() inicio: number;
  @Input() idContador: number;
  //DECLARAMOS UN METODO PARA DEVOLVER LA INFORMACION AL PADRE
  @Output() recibirIdContador = new EventEmitter();

  //VARIABLES NUMERO CONTADOR
  public numero: number;
  public mensaje: string;

  //REALIZAMOS LA LLAMADA AL PADRE CUANDO DESEEMOS
  //EL METODO DE LLAMADA DEL HIJO DEBE RECIBIR EVENT
  //AUNQUE NO LO UTILICEMOS
  incrementarContador(event) {
    this.numero = this.numero + 1;
    this.mensaje = "Contador es igual a " + this.numero;
    //LLAMAMOS AL PADRE
    this.recibirIdContador.emit(this.idContador);
  }

  constructor() { }

  ngOnInit(): void {
    //EL PADRE NOS DIRA EL INCIIO Y EL ID
    this.numero = this.inicio;
    this.mensaje = "Contador id: " + this.idContador + ", Valor inicial: " + this.inicio;
  }

}
