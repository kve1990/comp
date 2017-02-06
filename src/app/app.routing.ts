import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'blog',
		component: BlogComponent
	},
    {
		path: 'contacts',
		component: ContactsComponent
	},
    {
		path: 'partners',
		component: PartnersComponent
	},
	{
		path: 'service-detail/:id',
		component: DetailServiceComponent
	},
	{
		path: 'service/:id',
		component: ServiceComponent
	},
    {
		path: 'service',
		component: ServiceComponent
	},
    {
		path: 'settings',
		component: SettingsComponent
	},
    {
		path: 'shop',
		component: ShopComponent
	},
    {
		path: 'price',
		component: TrainingComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);