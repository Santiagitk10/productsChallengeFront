import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProductModel } from 'src/app/models/CreateProductModel';
import { GetProductModel } from 'src/app/models/GetProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productName: string = "";
  inInventory: number = 0;
  min: number = 0;
  max: number = 0;
  productId: number;
  product: GetProductModel;

  constructor(
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute ){

  }
  ngOnInit(): void {
    this.productId =  this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe(product => {
      this.productName = product.productName;
      this.inInventory = product.inInventory;
      this.min = product.min;
      this.max = product.max
    });

    
  }


  editProduct(){

    const newProduct: CreateProductModel = {
      productName: this.productName,
      inInventory: this.inInventory,
      min: this.min,
      max: this.max
    }

    this.productService.updateProduct(this.productId,newProduct).subscribe();

    this.router.navigate(['']);

  }


}
