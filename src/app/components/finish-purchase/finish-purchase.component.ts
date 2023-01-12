import { Component, Input } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

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

  createProduct(){
    console.log(this.purchaseData);
  }


}
