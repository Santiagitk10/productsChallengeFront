import { Component, OnInit } from '@angular/core';
import { GetPurchaseModel } from 'src/app/models/GetPurchaseModel';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchases: GetPurchaseModel[];

  constructor(private purchaseService: PurchaseService){

  }


  ngOnInit(): void {
    this.purchaseService.getAllPurchases().subscribe(p => {
      this.purchases = p;
    })
    
    let anchorElement = document.getElementById("viewAllPurchasesAnchor");
      anchorElement.classList.add("active");
    

  }


}
