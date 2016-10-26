import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { PortfolioComponent }    from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: '', redirectTo: "home", pathMatch: "full" },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
