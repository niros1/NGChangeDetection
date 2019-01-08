import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {

  @Input()
  counter$: Observable<{ current: number }>;
  counter: number;

  constructor(private counterServ: CounterService, private changeDetectionRef: ChangeDetectorRef) {
    this.counterServ.obser$.subscribe
    (counter => {
      this.counter = counter.current;
      // this.changeDetectionRef.markForCheck();
    });
  }

  ngOnInit() {
  }

}
