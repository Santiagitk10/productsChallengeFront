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


  createProduct(newProduct:CreateProductModel): Observable<CreateProductModel>{
    return this.http.post<CreateProductModel>(`${this.apiUrl}/Post`,newProduct, httpOptions);
  }


  getProductById(id:number): Observable<GetProductModel>{
    return this.http.get<GetProductModel>(`${this.apiUrl}/Get/${id}`);
  }

}
