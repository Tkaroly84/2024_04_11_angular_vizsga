import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb: any[], keresendo: any): any {
    if (!tomb) return null;
    if (!keresendo) return tomb;

    tomb = tomb.filter(
      (elem) => elem.megnevezes.toLowerCase().includes(keresendo.toLowerCase())
    )
    return tomb
  }

}
