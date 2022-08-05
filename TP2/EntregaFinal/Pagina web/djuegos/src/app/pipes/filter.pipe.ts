import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    
    const  resultadoBusqueda = [];
    for(const juego of value){
      if(juego.nombre.toLowerCase().indexOf(arg)> -1){
        resultadoBusqueda.push(juego);
      }
    }
    return resultadoBusqueda;
  }

}
