import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  registro:boolean=false;

  constructor(private modalSer: ModalService) {
    

   }

  ngOnInit(): void {
  }

  cerrarForm(){
    this.modalSer.$modal.emit(false);

  }

  openRegistro(){
    this.registro=true;
  }
  closeRegistro(){
    this.registro=false;
  }


  
}
