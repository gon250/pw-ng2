import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }  from './home/home.component';
import { PortfolioComponent }    from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
  declarations: [ 
      AppComponent,
      HomeComponent,
      PortfolioComponent,
      PageNotFoundComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
