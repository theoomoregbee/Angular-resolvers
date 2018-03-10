import { Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { NoResolverComponent } from './no-resolver/no-resolver.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'records', component: RecordsComponent },
    { path: 'no-resolver', component: NoResolverComponent },
    { path: '**', redirectTo: 'home' }
];
