import { NumberFormatStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductModel } from '../models/GetProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://localhost:7077/api/Product";

  constructor(private http: HttpClient) { }

  
  getProducts(pageNumber: number, pageSize: number): Observable<GetProductModel[]> {
    return this.http.get<GetProductModel[]>(`${this.apiUrl}/Get?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }


}
