import { Injectable } from '@angular/core';
import { Categories, Produit, ProduitRequest } from '../model/admin.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //categories
  public saveCategorie(categorie:Categories):Observable<Categories>{
    return this.http.post<Categories>(environment.backEndHost+"/e_shop/categorie",categorie);
  }
  public listCategorie():Observable<Array<Categories>>{
    return this.http.get<Array<Categories>>(environment.backEndHost+"/e_shop/list_categorie");
  }

  //produit
  public saveProduit(produit:ProduitRequest):Observable<ProduitRequest>{
    return this.http.post<ProduitRequest>(environment.backEndHost+"/e_shop/produit",produit);
  }


  public uploadeImageProduit(idProduit:number,formData:FormData):Observable<string>{
    return this.http.post<string>(environment.backEndHost+"/e_shop/uploadImagePro/"+idProduit,formData);
  }

  public listProduit():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit");
  }

  public modifierProduitSlider(id:number):Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/produit__slider/"+id);
  }

  public modifierProduitNew(id:number):Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/produit__new/"+id);
  }
  public modifierProduiPromo(id:number):Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/produit__promo/"+id);
  }

  public listPromProduit():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_promo");
  }
  public listNewProduit():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_new");
  }
  public listNewSlider():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_slider");
  }

  public listProduitFemme():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_femme");
  }

  public listProduitEnfant():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_enfant");
  }
  public listProduitHomme():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_homme");
  }
  public listProduitSport():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(environment.backEndHost+"/e_shop/list_produit_sport");
  }
}