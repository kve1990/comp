import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CategoryService } from 'app/services/category.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app/pages/home/home.component.html',
    styleUrls: ['app/pages/home/home.component.css']
})
export class HomeComponent implements OnInit {
    pageTitle: string;
    categories: any[];
    constructor(private categoryService: CategoryService, private _router: Router) { 
        this.pageTitle = 'Home Page';
    }

    ngOnInit() {
        this.categoryService.getCategories().subscribe(res => this.categories = res);
    }

    goToService(id){
        this._router.navigate(['/service', id]);
    }
}