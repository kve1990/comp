import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from "angular2-google-maps/core";

import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ServiceComponent } from './pages/service/service.component';
import { DetailServiceComponent } from './pages/service/detail.service.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TrainingComponent } from './pages/training/training.component';

import { HeaderComponent } from './shared/header.component';
import { BannerComponent } from './shared/banner.component';
import { CategoryComponent } from './shared/category.component';
import { FooterComponent } from './shared/footer.component';

import { CategoryService } from 'app/services/category.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    HomeComponent,
    PartnersComponent,
    ServiceComponent,
    DetailServiceComponent,
    SettingsComponent,
    ShopComponent,
    TrainingComponent,
    HeaderComponent,
    BannerComponent,
    CategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot()
  ],
  providers: [ CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
