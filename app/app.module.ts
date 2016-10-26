import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }    from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'portfolio', component: PortfolioComponent}
      ])
    ],
  declarations: [ 
      AppComponent,
      HomeComponent,
      PortfolioComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
