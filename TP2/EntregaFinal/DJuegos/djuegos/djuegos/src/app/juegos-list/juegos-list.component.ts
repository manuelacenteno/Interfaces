import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { Lista } from './juego';

@Component({
  selector: 'app-juegos-list',
  templateUrl: './juegos-list.component.html',
  styleUrls: ['./juegos-list.component.scss']
})
export class JuegosListComponent implements OnInit {

 categorias: Lista[] = [{
  categoria: "Acción",
  juegos : [{
    id: 1,
    nombre: "Happy Wheels",
    imagen: "assets/img/JuegosAccion/happyWheels.webp"
  },
  {
    id: 2,
    nombre: "Stickman Temple Duel",
    imagen: "assets/img/JuegosAccion/Stickman.webp"
  },
  {
    id: 3,
    nombre: "One Escape",
    imagen: "assets/img/JuegosAccion/OneEscape.png"
  },
  {
    id: 4,
    nombre: "Craft Bros Run",
    imagen: "assets/img/JuegosAccion/Craft.webp"
  },
  {
    id: 5,
    nombre: "Narrow One",
    imagen: "assets/img/JuegosAccion/Narrow.webp"
  },
  {
    id: 6,
    nombre: "Martial Arts: Fighter Duel",
    imagen: "assets/img/JuegosAccion/Martial.jpg"
  },
  {
    id: 7,
    nombre: "Bazooka Boy",
    imagen: "assets/img/JuegosAccion/Bazooka.webp"
  },
  {
    id: 8,
    nombre: "Squid Game: El Juego del Calamar",
    imagen: "assets/img/JuegosAccion/Squid.webp"
  },
  {
    id: 9,
    nombre: "Fortnite",
    imagen: "assets/img/JuegosAccion/fortnite.jpg"
  },
  {
    id: 10,
    nombre: "Solar Smash",
    imagen: "assets/img/JuegosAccion/Solar.jpg"
  }]
}, {
  categoria: "Aventuras",
  juegos : [{
    id: 1,
    nombre: "Minecraft",
    imagen: "assets/img/juegoAccion3.jpg"
  },
  {
    id: 2,
    nombre: "Among Us: Online Edition",
    imagen: "assets/img/JuegosAventura/AmongUsOnLineEdition.webp"
  },
  {
    id: 3,
    nombre: "Five Nights at Freddy's",
    imagen: "assets/img/JuegosAventura/FiveNights.jpg"
  },
  {
    id: 4,
    nombre: "Super Mario 64",
    imagen: "assets/img/JuegosAventura/SuperMario64.webp"
  },
  {
    id: 5,
    nombre: "Dragon Ball:Advance Adventure",
    imagen: "assets/img/JuegosAventura/DragonBall.jpg"
  },
  {
    id: 6,
    nombre: "Classic Minecraft",
    imagen: "assets/img/JuegosAventura/ClassicMineCraft.webp"
  },{
    id: 7,
    nombre: "Baldi's basics in education and learning",
    imagen: "assets/img/JuegosAventura/Baldi.webp"
  },
  {
    id: 8,
    nombre: "Among us",
    imagen: "assets/img/JuegosAventura/Amongus.webp"
  },
  {
    id: 9,
    nombre: "Five nights at Freddy's 2",
    imagen: "assets/img/JuegosAventura/FiveNights2.jpg"
  },
  {
    id: 10,
    nombre: "Granny",
    imagen: "assets/img/JuegosAventura/Granny.webp"
  }]
}, {
  categoria: "Multijugador",
  juegos : [{
    id: 1,
    nombre: "Slither.io",
    imagen: "assets/img/JuegosMultijugador/Slither-io.webp"
  },
  {
    id: 2,
    nombre: "Imposter Battle Royale",
    imagen: "assets/img/JuegosMultijugador/Imposter.png"
  },
  {
    id: 3,
    nombre: "Let's Fish",
    imagen: "assets/img/JuegosMultijugador/fish.jpg"
  },
  {
    id: 4,
    nombre: "Roblox",
    imagen: "assets/img/JuegosMultijugador/roblox.jpg"
  },
  {
    id: 5,
    nombre: "Ludo Hero",
    imagen: "assets/img/JuegosMultijugador/Ludo.webp"
  },
  {
    id: 6,
    nombre: "Bullet Force Multiplayer",
    imagen: "assets/img/JuegosMultijugador/BulletForce.jpg"
  },
  {
    id: 7,
    nombre: "Uno Online",
    imagen: "assets/img/JuegosMultijugador/uno.jpg"
  },
  {
    id: 8,
    nombre: "Agar.io",
    imagen: "assets/img/JuegosMultijugador/Agar-io.jpg"
  },
  {
    id: 9,
    nombre: "Firestone idle RPG",
    imagen: "assets/img/JuegosMultijugador/Firestone.jpg"
  },
  {
    id: 10,
    nombre: "Stumble Guys: Multiplayer",
    imagen: "assets/img/JuegosMultijugador/Stumble.webp"
  }]
}, {
  categoria: "Clásicos",
  juegos : [{
    id: 1,
    nombre: "Super Mario World Online",
    imagen: "assets/img/JuegosClasico/MarioBros.webp"
  },
  {
    id: 2,
    nombre: "Sonic 3 & Knuckles: The Challenges",
    imagen: "assets/img/JuegosClasico/Sonic3.jpg"
  },
  {
    id: 3,
    nombre: "Metal Slug",
    imagen: "assets/img/JuegosClasico/MetalSlug.webp"
  },
  {
    id: 4,
    nombre: "Super Smash Flash 2",
    imagen: "assets/img/JuegosClasico/SuperSmash.jpg"
  },
  {
    id: 5,
    nombre: "Cuatro en Linea",
    imagen: "assets/img/JuegosClasico/cuatroLinea.jpg"
  },
  {
    id: 6,
    nombre: "Pacman",
    imagen: "assets/img/pacMan.webp"
  },
  {
    id: 7,
    nombre: "Sonic Classic Heroes",
    imagen: "assets/img/JuegosClasico/SonicClassic.jpg"
  },
  {
    id: 8,
    nombre: "Super Mario Kart",
    imagen: "assets/img/JuegoClasico/SupermarioKart.jpg"
  },
  {
    id: 9,
    nombre: "Cat Mario",
    imagen: "assets/img/JuegoClasico/CatMario.webp"
  },
  {
    id: 10,
    nombre: "Dibbles: ProPack",
    imagen: "assets/img/JuegoClasico/Dibbles.jpg"
  }]
}];

  constructor() { }

  notFound :string ='block';

  ngOnInit(): void {
    setTimeout(() =>{
      this.closeLoading();
    },4000);
  }
  closeLoading():void{
    this.notFound = 'none';
  }

  getCategorias(): Lista[]{
    return this.categorias;
  }

}
