import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  public counter: number;
  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  increase() {
    this.counter++;
  }

}
