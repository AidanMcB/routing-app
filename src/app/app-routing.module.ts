import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
   { path: 'first-component', component: FirstComponent }, 
   { path: 'second-component', component: SecondComponent },
   { path: '', redirectTo: '/first-component', pathMatch: 'full'}, //Redirects to first component
   { path: '**', component: PageNotFoundComponent } //Wildcard route 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
