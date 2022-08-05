import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

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
