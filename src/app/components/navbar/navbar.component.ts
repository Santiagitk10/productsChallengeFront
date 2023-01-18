import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  newProductAnchor = document.getElementById("newProductAnchor");
  viewAllPurchasesAnchor = document.getElementById("viewAllPurchasesAnchor");


  

}
