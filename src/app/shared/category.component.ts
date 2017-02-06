import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: 'app/shared/category.component.html',
    styleUrls: ['app/shared/category.component.css'],
    animations: [

    trigger(`movePanel`, [
      transition('void => *', [
        style({
            transform: 'translateY(20px)',
            opacity: 0
        }),
        animate(500)
       ])
    ])

  ]
})
export class CategoryComponent implements OnInit {
    state: string = 'inactive';
    @Input() items: any[];
    categories: any[];
    subcategories: any[];
    @Output() getSubitems: EventEmitter<string> = new EventEmitter<string>();
    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        
    }

    clickButton(id){
        this.getSubitems.emit(id);
    }
}