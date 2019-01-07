import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit {

  @Input()
  input1: number;

  constructor() { }

  ngOnInit() {
  }

}
