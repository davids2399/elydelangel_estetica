import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '@models/product/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getJSON() {
      return this.httpClient.get<Product[]>('./assets/json/products.json');
  }
}
