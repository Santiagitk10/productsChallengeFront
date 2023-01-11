import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent  {


  @Input() productId: number;

  @Output() productPurchaseData = new EventEmitter<string>();

  


  addProductPurchaseData(value: string){
    this.productPurchaseData.emit(`${this.productId},${value}`);
  }

}
