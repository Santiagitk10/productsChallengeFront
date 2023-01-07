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
      this.productName = this.product.productName;
      this.inInventory = this.product.inInventory;
      this.min = this.product.min;
      this.max = this.product.max
    });

    
  }


  //TODO IMPLEMENTATION OF THE EDIT METHOD
  editProduct(){

    //THIS MODEL NEEDS TO BE CHANGE FOR EDIT MODEL AS PER SERVER DTO
    // const newProduct: CreateProductModel = {
    //   productName: this.productName,
    //   inInventory: this.inInventory,
    //   min: this.min,
    //   max: this.max
    // }

    this.router.navigate(['']);

  }


}
