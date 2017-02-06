import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-training',
    templateUrl: 'app/pages/training/training.component.html',
    styleUrls: ['app/pages/training/training.component.css']
})
export class TrainingComponent implements OnInit {
    titlePage: string;
    constructor() {
        this.titlePage = "Прайс";
     }

    ngOnInit() { }
}