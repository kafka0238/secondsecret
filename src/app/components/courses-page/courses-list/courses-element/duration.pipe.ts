import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hour = Math.floor(value / 60);
    let str = '';
    if (hour > 0) {
      const min = value % 60;
      str += hour + 'h';
      if (min > 0) {
        str += ' ' + min + 'min';
      }
    } else {
      str += value + 'min';
    }
    return str;
  }

}
