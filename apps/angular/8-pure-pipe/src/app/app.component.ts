import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyComputationPipe } from '../pipes/heavyComputation.pipe';

@Component({
  imports: [NgFor, HeavyComputationPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | appHeavyComputation: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
