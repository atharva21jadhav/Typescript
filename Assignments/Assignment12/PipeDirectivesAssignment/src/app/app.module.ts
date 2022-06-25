import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRevPipe } from './my-rev.pipe';
import { AddPipe } from './add.pipe';
import { MultPipe } from './mult.pipe';
import { MarvellousCheckPipe } from './marvellous-check.pipe';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailDirective } from './comp-fail.directive';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    AddPipe,
    MultPipe,
    MarvellousCheckPipe,
    CompSuccessDirective,
    CompFailDirective,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
