import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'layout',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        component: LandingComponent,
        children: []
    }
];

