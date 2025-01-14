import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHeavyComputation',
})
export class HeavyComputationPipe implements PipeTransform {
  transform(person: string, index: number): string {
    return `${person} - ${index}`;
  }
}
