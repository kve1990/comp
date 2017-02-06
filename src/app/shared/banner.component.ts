import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: 'app/shared/banner.component.html',
    styleUrls: ['app/shared/banner.component.css'],
    animations: [

      trigger(`movePanel`, [
        transition('void => *', [
          style({
              transform: 'translateY(5px)',
              opacity: 0
          }),
          animate(400)
         ])
      ])

    ]
})
export class BannerComponent implements OnInit {
    state: string = 'inactive';
    constructor() { }

    ngOnInit() { }
}