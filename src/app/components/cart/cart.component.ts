import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductModel } from 'src/app/models/GetProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartProductData = [];
productNames: string[] = [];
quantities: number[] = [];
canProceedToCheckout: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService )
  {
  }

  ngOnInit(): void {
    this.cartProductData =  this.route.snapshot.params['cartString'].split(",");
    this.cartProductData.forEach(element => {
      let productId = parseInt(element.split(".")[0]);
      let quantity = parseInt(element.split(".")[1]);
      if(!isNaN(productId)){
        this.productService.getProductById(productId).subscribe(p => {
          this.productNames.push(p.productName);
        })
        this.quantities.push(quantity);
      }
      
    });

    if(this.cartProductData[0] != ""){
      this.canProceedToCheckout = true;
    }
  }

}
