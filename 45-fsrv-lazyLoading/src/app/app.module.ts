import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';


const routes: Routes = [
  {
    path: '',
    component: FirstRouteComponent,
    pathMatch: 'full'
  },
  {
    path : 'about',
    component : SecondRouteComponent
  },
  {
    path: 'lazy',
    loadChildren : './lazy/lazy.module#LazyModule'
  },
  {
    path: 'heavy',
    loadChildren : './rarely-used/rarely-used.module#RarelyUsedModule'
  },
  {
    path : '**',
    component : NotFoundRouteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    NotFoundRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
