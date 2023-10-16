import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dasboard-client',
  templateUrl: './dasboard-client.component.html',
  styleUrls: ['./dasboard-client.component.scss']
})
export class DasboardClientComponent implements OnInit {
 
  images = [
    './../../../assets/images/a&.jpg',
    './../../../assets/images/aaa.jpg',
    'a./../../../assets/images/eshop.png',
    // Ajoutez d'autres images ici
  ];

  customOptions: any = {
    loop: true, // Active le défilement infini
    items: 1,   // Nombre d'éléments affichés à la fois
    dots: true, // Activation des indicateurs de pagination    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
