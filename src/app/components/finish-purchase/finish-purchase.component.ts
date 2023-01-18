import { Component, Input } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePurchaseModel } from 'src/app/models/CreatePurchaseModel';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-finish-purchase',
  templateUrl: './finish-purchase.component.html',
  styleUrls: ['./finish-purchase.component.css']
})
export class FinishPurchaseComponent {


  @Input() purchaseData: string[];
  canCreatePurchase: boolean = false;
  idType: string = "";
  id: string = "";
  fullName: string = "";
  errorMessage: string = null;

  constructor(private purchaseService: PurchaseService, private router: Router )
  {

  }

  createPurchase(){
    const newPurchase: CreatePurchaseModel = {
      idType: this.idType,
      id: this.id,
      clientName: this.fullName,
      productIDs: this.purchaseData
    }

    this.purchaseService.createPurchase(newPurchase).subscribe(purchase => purchase,(err) => {
      this.errorMessage = err.error.Message;
    });

    setTimeout(() => {
      this.router.navigate(['']);
    },3000);
    
    

  }


}
