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
import { ConnexionClientComponent } from './client/connexion-client/connexion-client.component';
import { FavorieComponent } from './client/favorie/favorie.component';
import { PanierComponent } from './client/panier/panier.component';
import { FemmeComponent } from './client/femme/femme.component';
import { HommeComponent } from './client/homme/homme.component';
import { EnfantComponent } from './client/enfant/enfant.component';
import { SportComponent } from './client/sport/sport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ConnexionAdminComponent } from './admin/connexion-admin/connexion-admin.component';
import { ProduitComponent } from './admin/produit/produit.component';
import { CreerProduitComponent } from './admin/creer-produit/creer-produit.component';
import { AchatComponent } from './admin/achat/achat.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    AppClientComponent,
    DasboardClientComponent,
    AppAdminComponent,
    DasboardAdminComponent,
    ConnexionClientComponent,
    FavorieComponent,
    PanierComponent,
    FemmeComponent,
    HommeComponent,
    EnfantComponent,
    SportComponent,
    ConnexionAdminComponent,
    ProduitComponent,
    CreerProduitComponent,
    AchatComponent,
    CategorieComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    CarouselModule,
    NgxPaginationModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
