import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor() { 
    if(window.matchMedia("(min-width:600px)").matches){
      this.notFound = "block";
    } else {
      this.notFound = "none";
    }
  }

  notFound :string;

  ngOnInit(): void {
    setTimeout(() =>{
      this.closeLoading();
    },5000);
  }
  closeLoading():void{
    this.notFound = 'none';
  }
  
}
