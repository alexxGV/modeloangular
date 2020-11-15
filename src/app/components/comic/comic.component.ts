import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic: Comic;
  @Input() indice: number;
  @Output() seleccionarFavorito = new EventEmitter();
  @Output() eliminarComic = new EventEmitter();

  //METODO SELECCIONAR FAVORITO
  marcarFavorito() {
    console.log("selecccionado");
    this.seleccionarFavorito.emit(this.indice);
  }

  deleteComic() {
    this.eliminarComic.emit(this.indice);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
