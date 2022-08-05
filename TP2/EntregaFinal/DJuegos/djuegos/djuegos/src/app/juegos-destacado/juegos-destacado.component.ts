import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos-destacado',
  templateUrl: './juegos-destacado.component.html',
  styleUrls: ['./juegos-destacado.component.scss']
})
export class JuegosDestacadoComponent implements OnInit {

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
