import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  //DECLAMOS LA VARIABLE DE TIPO PRODUCTO
  public producto: Producto;

  constructor() {
    //SE UTILIZA LA PALABRA new PARA CREAR OBJETOS
    this.producto = new Producto("Jordan", "basura", 200);
    // this.producto.nombre = "Jordan";
    // this.producto.imagen = "sdad";
    // this.producto.precio = 200;
  }

  ngOnInit(): void {
  }

}
