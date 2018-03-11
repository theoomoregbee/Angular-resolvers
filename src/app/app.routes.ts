import { Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { NoResolverComponent } from './no-resolver/no-resolver.component';
import { RecordCompResolver } from './resolvers/record-comp-resolver';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'records/:with-error', component: RecordsComponent, resolve: {
    pageData: RecordCompResolver
  } },
    { path: 'no-resolver/:with-error', component: NoResolverComponent },
    { path: '**', redirectTo: 'home' }
];
