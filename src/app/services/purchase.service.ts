import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePurchaseModel } from '../models/CreatePurchaseModel';
import { GetPurchaseModel } from '../models/GetPurchaseModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private apiUrl = "https://localhost:7077/api/Purchase";

  constructor(private http: HttpClient) { }


  createPurchase(newPurchase: CreatePurchaseModel): Observable<CreatePurchaseModel>{
    return this.http.post<CreatePurchaseModel>(`${this.apiUrl}/Post`,newPurchase, httpOptions);
  }


  getAllPurchases(): Observable<GetPurchaseModel[]>{
    return this.http.get<GetPurchaseModel[]>(`${this.apiUrl}/Get`)
  }

}
