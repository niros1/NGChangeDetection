import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {

  @Input()
  counter: Observable<{current: number}>;

  constructor() {
  }

  ngOnInit() {
  }

}
