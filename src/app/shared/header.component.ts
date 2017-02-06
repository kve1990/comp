import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app/shared/header.component.html',
    styleUrls: ['app/shared/header.component.css']
})
export class HeaderComponent implements OnInit {
    search: any;
    input: any;
    searchStatus: boolean = false;
    constructor() { }

    ngOnInit() { }

    toggleSearch(){
        this.input = document.querySelector('.search-input');
        this.input.focus();
        this.searchStatus = !this.searchStatus;
    }

    blurSearch(){
        this.searchStatus = false;
    }

    submitSearch(e: HTMLInputElement){
        let searchValue: string = e.value;
        e.value = ''
    }
}