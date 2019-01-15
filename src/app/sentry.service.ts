import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { state } from '@angular/animations';



@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(private inj: Injector) {

    Sentry.init({
      dsn: 'https://91a9ac369f1f42d2a9932e4fbf493170@sentry.io/1282614',
      environment: 'development'
    });

  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);

    throw error;
  }
}
