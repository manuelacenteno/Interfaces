import { Component, OnInit } from '@angular/core';
import { Juego } from './../juegos-list/juego';

@Component({
  selector: 'app-juegos-favoritos',
  templateUrl: './juegos-favoritos.component.html',
  styleUrls: ['./juegos-favoritos.component.scss']
})
export class JuegosFavoritosComponent implements OnInit {

 

  juegos: Juego[] = [
    {
      id: 1,
      nombre: "Squid Game: El Juego del Calamar",
      imagen: "assets/img/JuegosAccion/Squid.webp"
    },
    {
      id: 2,
      nombre: "Fortnite",
      imagen: "assets/img/JuegosAccion/fortnite.jpg"
    },
    {
      id: 3,
      nombre: "Among us",
      imagen: "assets/img/JuegosAventura/Amongus.webp"
    },
    {
      id: 4,
      nombre: "Stumble Guys: Multiplayer",
      imagen: "assets/img/JuegosMultijugador/Stumble.webp"
    },
    {
      id: 5,
      nombre: "Super Mario Kart",
      imagen: "assets/img/JuegoClasico/SupermarioKart.jpg"
    },
    {
      id: 6,
      nombre: "Dibbles: ProPack",
      imagen: "assets/img/JuegoClasico/Dibbles.jpg"
    },
    {
      id: 7,
      nombre: "Cat Mario",
      imagen: "assets/img/JuegoClasico/CatMario.webp"
    },
    {
      id: 8,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 9,
      nombre: "Agar.io",
      imagen: "assets/img/JuegosMultijugador/Agar-io.jpg"
    },
    {
      id: 10,
      nombre: "Super Smash Flash 2",
      imagen: "assets/img/JuegosClasico/SuperSmash.jpg"
    }
  ];

  constructor() {

   }

  ngOnInit(): void {
  }


}
