import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert',
  standalone: true
})
export class CurrencyConvertPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    
    console.log(args);
    
    if(args.length>0){
      let [data]=args;
      return value*data;

    }
    else{

      return value*85;
    }
  }

}
