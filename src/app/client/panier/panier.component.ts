import { Component, OnInit } from '@angular/core';
import { ProduitPanier } from 'src/app/model/admin.model';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  listPanier!:Array<ProduitPanier>
  quatiteAjout:number=1;
  

  constructor(private servicePanier:PanierService) { }

  ngOnInit(): void {
    this.getListePanier()    
  }

  getListePanier(){
    this.listPanier=this.servicePanier.getList();
  }

  updatePanier(poduit:ProduitPanier){
    this.servicePanier.updateListPanier(poduit);

  }

  handleMoins(id:number){
    let panier = this.listPanier.find(res => res.id == id);
    // Augmentez la quantité du panier de 1
    if (panier) {
        panier.quantite = panier.quantite! - 1;
        panier.sousTotal=panier.prixUnitaire! * panier.quantite
        this.updatePanier(panier);
    }
    this.getListePanier()
  }

  handlePlus(id:number){
    let panier = this.listPanier.find(res => res.id == id);
    // Augmentez la quantité du panier de 1
    if (panier) {
        panier.quantite = panier.quantite! + 1;
        panier.sousTotal=panier.prixUnitaire! * panier.quantite
        this.updatePanier(panier);
    }
    this.getListePanier();
  }

  removeProduit(id:number){
    this.servicePanier.deleteUser(id);
    this.getListePanier();
  }
  validationAchat(){
  confirm("Voulez vous confirmer");
  alert("Votre achat est bien success!")
  }

}
