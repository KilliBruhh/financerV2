import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paid'
})
export class PaidPipe implements PipeTransform {
  transform(payementStatus: boolean): string {
    return payementStatus ? '✔️' : '❌';
  }
}
