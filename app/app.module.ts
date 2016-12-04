import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }  from './home/home.component';
import { PortfolioComponent }    from './portfolio/portfolio.component';
import { BlogComponent} from './blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { PostsComponent } from './blog/posts.component';
import { WorksComponent } from './home/works.component';
import { EducationComponent } from './home/education.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

// import * as $ from "jquery";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule
    ],
  declarations: [
      AppComponent,
      HomeComponent,
      PortfolioComponent,
      BlogComponent,
      TimelineComponent,
      PageNotFoundComponent,
      PostsComponent,
      WorksComponent,
      EducationComponent,
      FooterComponent,
      HeaderComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
