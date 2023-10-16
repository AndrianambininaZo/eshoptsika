import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppClientComponent } from './client/app-client/app-client.component';
import { DasboardClientComponent } from './client/dasboard-client/dasboard-client.component';
import { AppAdminComponent } from './admin/app-admin/app-admin.component';
import { DasboardAdminComponent } from './admin/dasboard-admin/dasboard-admin.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    AppClientComponent,
    DasboardClientComponent,
    AppAdminComponent,
    DasboardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
