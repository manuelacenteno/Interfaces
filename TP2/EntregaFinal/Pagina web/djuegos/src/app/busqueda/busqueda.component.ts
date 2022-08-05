import { Component, OnInit } from '@angular/core';
import {Juego, Lista} from './../juegos-list/juego';
import {JuegosListComponent} from './../juegos-list/juegos-list.component'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  filterJuego = '';
  asd: Lista[] = new JuegosListComponent().getCategorias();
  

  constructor() { }

  notFound :string ='block';

  ngOnInit(): void {
    setTimeout(() =>{
      this.closeLoading();
    },5000);
  }
  closeLoading():void{
    this.notFound = 'none';
  }


}
