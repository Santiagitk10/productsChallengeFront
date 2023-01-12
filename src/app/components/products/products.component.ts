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
  cartProductData = [];
  cartQuantity: number = 0;

  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts(this.pageNumber, this.pageSize).subscribe((products) => this.products = products);
  }
  

  deleteProduct(id: number): void{
    this.productService.deleteProduct(id).subscribe();
    this.getProducts();
  }


  addProductData(newProductData: string){
    this.cartQuantity = 0;
    this.cartProductData.push(newProductData);
    this.cartProductData.forEach(element => {
      let productQuantity = parseInt(element.split(".")[1]);
      this.cartQuantity += productQuantity;
    });
  }



}
