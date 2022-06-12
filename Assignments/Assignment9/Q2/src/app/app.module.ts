import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NumberOperationsService } from './number-operations.service';
import { StringOperationsService } from './string-operations.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumberOperationsService, StringOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
