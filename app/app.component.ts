import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Gonzalo Barba</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">home</a>
      <a routerLink="/portfolio" routerLinkActive="active">portfolio</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
