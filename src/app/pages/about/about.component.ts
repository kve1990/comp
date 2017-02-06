import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: 'app/pages/about/about.component.html'
})
export class AboutComponent implements OnInit {
    titlePage: string;
    constructor() { 
        this.titlePage = "About Page";
    }

    ngOnInit() { }
}