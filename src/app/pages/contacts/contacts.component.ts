import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from "angular2-google-maps/core";

@Component({
    selector: 'app-contacts',
    templateUrl: 'app/pages/contacts/contacts.component.html',
    styleUrls: ['app/pages/contacts/contacts.component.css']
})
export class ContactsComponent implements OnInit {
    pageTitle: string;

    // google maps zoom level
    zoom: number = 12;
    
    // initial center position for the map
    lat: number = 51.819050;
    lng: number = 107.566927;
    m: any = {
        lat: 51.800907,
        lng: 107.454060
    };

    constructor() {
        this.pageTitle = 'Contacts Page';
    }

    ngOnInit() {
        
     } 
  
}