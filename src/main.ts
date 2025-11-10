import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient() // Make sure this is here
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));