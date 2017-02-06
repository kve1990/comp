import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from 'app/services/category.service';

@Component({
    selector: 'app-detail-service',
    templateUrl: 'app/pages/service/detail.service.component.html',
    providers: [ CategoryService ]
})
export class DetailServiceComponent implements OnInit {
    items: any;
    constructor(private _route: ActivatedRoute, private categoryService: CategoryService) { }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.categoryService.getItems(id).subscribe(res => this.items = res);
    }
}