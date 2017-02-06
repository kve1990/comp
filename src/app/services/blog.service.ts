import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService{
    baseUrl: string;
    constructor(private http: Http){
        this.baseUrl = 'http://slim/index.php/api/posts';
    }

    getPosts(){
        return this.http.get(this.baseUrl).map(res => res.json());
    }
}