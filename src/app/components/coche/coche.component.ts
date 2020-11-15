import { Component, OnInit, Input } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car: Coche;
  public mensaje: string;


  constructor() {
    // this.car = new Coche("PONTIAC", "FIREBIRD", 0, 200, 20, false);
    // this.comprobarEstado();
  }

  //CUANDO RECIBIMOS OBJETOS NO UTILIZAMOS EL CONSTRUCTOR
  ngOnInit(): void {
    this.comprobarEstado();
  }

  comprobarEstado() {
    if (this.car.estado == false) {
      this.mensaje = "El coche esta apagado";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "El coche esta encendido";
      return true;
    }
  }

  encenderCoche() {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche() {
    if (this.comprobarEstado() == false) {
      alert("El coche no esta encendido");
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if (this.car.velocidad >= this.car.velocidadMax) {
        this.car.velocidad = this.car.velocidadMax;
      }
    }
  }


}
