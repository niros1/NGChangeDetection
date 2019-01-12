import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class SentryErrorHandler implements ErrorHandler {
export class TimerService {
  constructor(private _ngZone: NgZone) {
    // this._ngZone.runOutsideAngular(() => {
    let i = 0;
    setInterval(function () {
      console.log(`trigger nbumber ${i}`);
      i++;
    }, 1000);
    // });
  }

}
