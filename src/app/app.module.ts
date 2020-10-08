import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TickerComponent } from './ticker/ticker.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { HomeComponent } from './static/home/home.component';
import { ContactComponent } from './static/contact/contact.component';
import { WorkComponent } from './static/work/work.component';
import { PropsComponent } from './static/props/props.component';
import { TriSectionComponent } from './tri-section/tri-section.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FaqComponent } from './static/faq/faq.component';
import { AdminComponent } from './static/admin/admin.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TickerComponent,
    ArticleComponent,
    FooterComponent,
    FormComponent,
    InfoBoxComponent,
    HomeComponent,
    ContactComponent,
    WorkComponent,
    FaqComponent,
    PropsComponent,
    TriSectionComponent,
    GalleryComponent,
    MainNavComponent,
    AdminComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
