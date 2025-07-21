import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent  {
counter: number = 0;
increment(): void {
  this.counter++;
}
decrement(): void {
  this.counter--;
}
}