import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-change-detection';
  arr1 = [];
  counter = {current: 0};
  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.arr1.push(index);
    }
  }


  increase() {
    this.counter = {current: ++this.counter.current};
  }

}
