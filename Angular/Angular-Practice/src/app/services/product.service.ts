import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

    console.log("product Service");
    
  }
  getProductList(){
    const url="http://dummyjson.com/products"
    return this.http.get(url)
  }
  
}
