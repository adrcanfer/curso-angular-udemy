import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show:boolean): any {
    
    let res = value;
    if(show){
      res = "*".repeat(value.length);
    }
    return res;
  }

}
