import { Component, OnInit } from '@angular/core';
import libros from '../../../files/books.json';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libros:[{id:number, titulo:string, autor:string, editorial:string, descripcion:string, img:string}] = libros;

  constructor() { 
    this.libros = libros;
  }

  ngOnInit(): void {
  }

}
