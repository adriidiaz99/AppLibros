import { Component } from '@angular/core';
import * as libros from "../files/books.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AppLibros';
  public libros : { id : string , titulo : string, autor : string, editorial : string, descripcion : string, img : string } [] = libros ;
}
