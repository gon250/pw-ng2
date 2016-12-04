import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
// Import xml2js

@Injectable()

export class BlogService {
    constructor( private http: Http) {

    }

    getPosts() {
        let url = 'https://my-cors-proxy.herokuapp.com/blog.gonzalobarba.com/feed';

        // TODO: Implement xml2js to parse xml to json.

        return this.http.get(url)
        .toPromise()
        .then( response => response.json() )
        .catch(this.error);
    }

    getPost(id: number) {

    }

    error(error: any) {
        return Promise.reject(error.message || error);
    }

}
