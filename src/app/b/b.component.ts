import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  @Input()
  input1: number;

  constructor() { }

  ngOnInit() {
  }

}
