import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './static/home/home.component';
import { WorkComponent } from './static/work/work.component';
import { PropsComponent } from './static/props/props.component';
import { ContactComponent } from './static/contact/contact.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'arbeiten', component: WorkComponent },
	{ path: 'requisiten', component: PropsComponent },
	{ path: 'kontakt', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
