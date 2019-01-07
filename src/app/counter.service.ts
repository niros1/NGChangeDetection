import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  counterSub = new BehaviorSubject({ current: this.counter });
  obser$ = this.counterSub.asObservable();

  constructor() { }

  public increase() {
    this.counter++;
    this.counterSub.next({ current: this.counter });
  }
}
