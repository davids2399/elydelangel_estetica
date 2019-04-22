import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@services/products/products.service';
import { Product } from '@models/product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { 
    this.products = [];
  }

  ngOnInit() {
    this.productsService.getJSON().subscribe(data => {
      this.products = data;
    });
  }

}