import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.scss']
})
export class BarraNavComponent implements OnInit {

  abrirOpcion:boolean=false;

  constructor(private modalSer: ModalService) { 
   
    if(window.matchMedia("(min-width:600px)").matches){
      document.addEventListener("DOMContentLoaded", e =>{
        //this.openBarra();
      });
      
    } else {

    }
  }

  ngOnInit(): void {

    this.modalSer.$modal.subscribe((valor) => {this.abrirOpcion=valor})
  }

  
  openLogin(){
    this.abrirOpcion =true;
  }
  openBarra():void{
    document.querySelector(".barra")?.classList.toggle("hide")
  }

}
