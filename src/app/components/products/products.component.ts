import { Component } from '@angular/core';
import { GetProductModel } from 'src/app/models/GetProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products: GetProductModel[] = [];
  pageNumber: number = 1;
  pageSize: number = 4;

  constructor(private productService: ProductService){}


  // getProducts(){
  //   this.productService.getProducts(this.pageNumber, this.pageSize).subscribe((products) => (this.products = products));
    
  // }

  getProducts(){
    this.productService.getProducts(this.pageNumber, this.pageSize).subscribe((products) => this.products = products);
  }
  

}
