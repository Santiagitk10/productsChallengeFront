import { NumberFormatStyle } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductModel } from '../models/CreateProductModel';
import { GetProductModel } from '../models/GetProductModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://localhost:7077/api/Product";

  constructor(private http: HttpClient) { }

  
  getProducts(pageNumber: number, pageSize: number): Observable<GetProductModel[]> {
    return this.http.get<GetProductModel[]>(`${this.apiUrl}/Get?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }

  getProductById(id:number): Observable<GetProductModel>{
    return this.http.get<GetProductModel>(`${this.apiUrl}/Get/${id}`);
  }

  createProduct(newProduct:CreateProductModel): Observable<CreateProductModel>{
    return this.http.post<CreateProductModel>(`${this.apiUrl}/Post`,newProduct, httpOptions);
  }


  updateProduct(id:number, product: CreateProductModel) {
    return this.http.put(`${this.apiUrl}/Put/${id}`,product, httpOptions);
  } 


  deleteProduct(id:number){
    return this.http.delete(`${this.apiUrl}/Delete/${id}`);
  }


}
