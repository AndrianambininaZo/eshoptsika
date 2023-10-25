import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.scss']
})
export class AppAdminComponent implements OnInit {
 

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  deconnexion(){
    this.route.navigateByUrl("/eshop_admin/connexion__eshop")
  }

}
