import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: 'app/pages/settings/settings.component.html',
    styleUrls: ['app/pages/settings/settings.component.css']
})
export class SettingsComponent implements OnInit {
    titlePage: string;
    color: string;
    constructor() {
        this.titlePage = "Кастомизация и настройки";
        this.color = '#ff4a51';
     }

    ngOnInit() {
      //document.documentElement.style.setProperty('--base-color', this.color);
    }
}