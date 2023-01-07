import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductModel } from 'src/app/models/CreateProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  productName: string = "";
  inInventory: number = 0;
  min: number = 0;
  max: number = 0;

  constructor(private router: Router, private productService: ProductService ){

  }

  createProduct(){
    const newProduct: CreateProductModel = {
      productName: this.productName,
      inInventory: this.inInventory,
      min: this.min,
      max: this.max
    }

    this.productService.createProduct(newProduct).subscribe();

    this.router.navigate(['']);

  }

}
