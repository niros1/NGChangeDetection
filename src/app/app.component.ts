import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-change-detection';
  arr1 = [];


  constructor( private counterServ: CounterService) {
    for (let index = 0; index < 10000; index++) {
      this.arr1.push(index);
    }

  }

  onClick() {
    this.counterServ.increase();
  }
}
