import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard-admin',
  templateUrl: './dasboard-admin.component.html',
  styleUrls: ['./dasboard-admin.component.scss']
})
export class DasboardAdminComponent implements OnInit {
  
  nombreAchat!:number
  nombreProduit!:number
  nombreUtilisateur!:number
  constructor() { }

  ngOnInit(): void {
  }

}
