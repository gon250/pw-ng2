import { Component } from '@angular/core';

@Component({
    templateUrl: '../app/blog/blog.component.html',
    styles: [
        'h1 {color:white;}',
        `.page-header-blog {
            height: 80vh;
            background-position: center center;
            background-size: cover;
            margin: 0;
            padding: 0;
            border: 0;
         }
         .page-header-blog  .carousel .carousel-indicators {
            bottom: 60px;
            }
            .page-header-blog  .container {
            padding-top: 30vh;
            color: #FFFFFF;
            }
            .page-header-blog  .title {
            color: #FFFFFF;
            }
            .page-header-blog .header-small {
            height: 65vh;
            }
            .page-header-blog .header-small .container {
            padding-top: 10vh;
            }
         `
        ]
})

export class BlogComponent { }
