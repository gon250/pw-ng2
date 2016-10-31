import { Component } from '@angular/core';
import { BlogPost } from './blog-post';
import { BLOGPOSTS } from './mocks';
@Component({
    selector: 'posts',
    templateUrl: './app/blog/posts.component.html',
    styles: [
        `.blog-title{
                color: #F44336;
            }`, 
        `.blog-content {
            color: #999999;
            font-size: 1.25em;
            line-height: 1.55em;
        }`
    ]
})
export class PostsComponent {
    posts: BlogPost[];

    ngOnInit(){
        this.posts = BLOGPOSTS;
    } 
 }