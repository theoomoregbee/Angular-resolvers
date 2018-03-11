import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { NoResolverComponent } from './no-resolver/no-resolver.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgAlertModule } from '@theo4u/ng-alert';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordsComponent,
    NoResolverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    SlimLoadingBarModule.forRoot(),
    NgAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
