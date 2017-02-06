import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = "http://slim/index.php/api/";
    }

     getCategories(){
         return this.http.get(this.baseUrl + "categories")
            .map(res => res.json());
     }

     getSubcategories(id){
         return this.http.get(this.baseUrl + `category/${id}`)
            .map(res => res.json());
     }

     getItems(id){
         return this.http.get(this.baseUrl + `items/${id}`)
            .map(res => res.json());
     }
}