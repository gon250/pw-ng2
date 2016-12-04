import { Component } from '@angular/core';
import {BlogService} from './services/blog.service';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>
    <my-footer></my-footer>
  `,
  providers: [BlogService]
})
export class AppComponent { }
