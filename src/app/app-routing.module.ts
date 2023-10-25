import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppClientComponent } from './client/app-client/app-client.component';
import { DasboardClientComponent } from './client/dasboard-client/dasboard-client.component';
import { ConnexionClientComponent } from './client/connexion-client/connexion-client.component';
import { FemmeComponent } from './client/femme/femme.component';
import { HommeComponent } from './client/homme/homme.component';
import { EnfantComponent } from './client/enfant/enfant.component';
import { SportComponent } from './client/sport/sport.component';
import { PanierComponent } from './client/panier/panier.component';
import { FavorieComponent } from './client/favorie/favorie.component';
import { DasboardAdminComponent } from './admin/dasboard-admin/dasboard-admin.component';
import { AppAdminComponent } from './admin/app-admin/app-admin.component';
import { ProduitComponent } from './admin/produit/produit.component';
import { CreerProduitComponent } from './admin/creer-produit/creer-produit.component';
import { AchatComponent } from './admin/achat/achat.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionClientComponent },

  { path: 'test', component: TestComponent },

  { path: '', component: AppClientComponent, children: [
    { path: '', component: DasboardClientComponent },    
    { path: 'femme', component: FemmeComponent },
    { path: 'homme', component: HommeComponent },
    { path: 'enfant', component: EnfantComponent },
    { path: 'sport', component: SportComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'favorie', component: FavorieComponent },
  ] },
  
  { path: 'eshop_admin', component: AppAdminComponent, children: [
    /*{ path: '', component: DasboardAdminComponent },*/
    { path: '', component: ProduitComponent },
    { path: 'creer_produit', component: CreerProduitComponent },
    { path: 'achat', component: AchatComponent },
    /*{ path: 'categorie', component: CategorieComponent },*/
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
