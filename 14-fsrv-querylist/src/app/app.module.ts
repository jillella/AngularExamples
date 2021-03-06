import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildProjectedComponent } from './child-projected/child-projected.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildProjectedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
