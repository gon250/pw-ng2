import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from "./app.routing";
import { AppComponent }   from './app.component';


@NgModule({
  imports: [ BrowserModule, HomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
