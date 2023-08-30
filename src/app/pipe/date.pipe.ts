import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToDate'
})
export class DatePipe implements PipeTransform {

  transform(value: number): Date {

    return new Date(value);
  }

}
