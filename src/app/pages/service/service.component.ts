import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from 'app/services/category.service';

@Component({
    selector: 'app-service',
    templateUrl: 'app/pages/service/service.component.html',
    styleUrls: ['app/pages/service/service.component.css']
})
export class ServiceComponent implements OnInit {
    titlePage: string;
    categories: any[];
    subcategories: any[];

    constructor(private categoryService: CategoryService, private _router: Router, private _route: ActivatedRoute) {
        this.titlePage = "Услуги";
     }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.categoryService.getCategories().subscribe(res => this.categories = res);
        if(id){
            this.categoryService.getSubcategories(id).subscribe(res => this.subcategories = res);
            //this.titlePage = this.categories.find(id).title;
        }
    }

    getSubcategories(id){
        this.categoryService.getSubcategories(id).subscribe(res => this.subcategories = res);

    }

    goToCategory(id){
        this._router.navigate(['/service-detail', id]);
    }
}