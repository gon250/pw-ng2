import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../common/blog-post';
import { BLOGPOSTS } from './mocks';
import {BlogService} from '../services/blog.service';

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
export class PostsComponent implements OnInit {
    posts: BlogPost[];

    constructor(private _service: BlogService) { }

    ngOnInit() {
        this.posts = BLOGPOSTS;
        console.log(this._service.getPosts());
    }
 }
