import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop',
    templateUrl: 'app/pages/shop/shop.component.html',
    styleUrls: ['app/pages/shop/shop.component.css']
})
export class ShopComponent implements OnInit {
    titlePage: string;
    constructor() {
        this.titlePage = "Товары на продажу";
     }

    ngOnInit() { }
}