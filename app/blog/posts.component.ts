import { Component } from '@angular/core';
import { BlogPost } from './blog-post';
import { BLOGPOSTS } from './mocks';
@Component({
    selector: 'posts',
    templateUrl: './app/blog/posts.component.html'
})
export class PostsComponent {
    posts: BlogPost[];

    ngOnInit(){
        this.posts = BLOGPOSTS;
    } 
 }