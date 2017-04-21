import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor (private http: Http) {
        console.log('Posts service initialized...');
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }
}

export interface Post {
    id: number;
    title: string;
    body: string;
}