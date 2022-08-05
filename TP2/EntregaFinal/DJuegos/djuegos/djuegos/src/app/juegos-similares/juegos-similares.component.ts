import { Component, OnInit } from '@angular/core';
import { Juego, Lista } from './../juegos-list/juego';
import { JuegosListComponent } from '../juegos-list/juegos-list.component';

@Component({
  selector: 'app-juegos-similares',
  templateUrl: './juegos-similares.component.html',
  styleUrls: ['./juegos-similares.component.scss']
})
export class JuegosSimilaresComponent implements OnInit {

  juegos: Juego[] = [
    {
      id: 1,
      nombre: "Tres En Raya Online",
      imagen: "assets/img/JuegosSimilares/tresOnline.webp"
    },
  
    {
      id: 2,
      nombre: "Candy Crush",
      imagen: "assets/img/JuegosSimilares/candy.jpg"
    },{
      id: 3,
      nombre: "EnDice",
      imagen: "assets/img/JuegosSimilares/Endice.webp"
    },
    {
      id: 4,
      nombre: "Domino",
      imagen: "assets/img/JuegosSimilares/domino.webp"
    },{
      id: 5,
      nombre: "Sudoku",
      imagen: "assets/img/JuegosSimilares/sudoku.webp"
    },
    {
      id: 6,
      nombre: "Pac-Man-io",
      imagen: "assets/img/JuegosPacMan/Pac-Man-io.jpg"
    }
  ]
  desk:boolean;
  constructor() {
    if(window.matchMedia("(min-width:600px)").matches){
      this.desk = true;
    } else {
      this.desk = false;
    }
   }

  ngOnInit(): void {
  }

}
