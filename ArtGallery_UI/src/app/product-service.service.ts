import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-card/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = '/api/product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl + "/getAllProducts");
  }
}
