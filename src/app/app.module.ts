import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injectable, ErrorHandler, NgZone } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';



@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appref: ApplicationRef) {
    console.log(appref.componentTypes);

    const orgTick = appref.tick;
    appref.tick = function () {
      const before = performance.now();
      const retVal = orgTick.apply(this, arguments);
      const after = performance.now();
      console.log('CHANGE DETECTION time in milsec.microsec:' + (after - before), appref.viewCount);
      return retVal;
    };
  }
}


