import { Component } from "@angular/core";

@Component({
	selector: 'app-root',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
})
export class AppComponent {
	page: any;
	pages: any;
	color: string;
	state: boolean;

	constructor(){
		this.state = false;
	}
	toggleMenu(){
		this.state = !this.state;
	}
	pageClick(e){
		if(this.state){
			e.stopPropagation();
			this.state = !this.state;
		}
	}
	pageScroll(e){
		if(this.state){
			e.stopPropagation();
			e.perventDefault();
		}
	}

};