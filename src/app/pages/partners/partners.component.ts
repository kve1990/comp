import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: 'app/pages/partners/partners.component.html',
    styleUrls: ['app/pages/partners/partners.component.css']
})
export class PartnersComponent implements OnInit {
    titlePage: string;
    constructor() {
        this.titlePage = "Наши партнеры";
     }

    ngOnInit() { }
}