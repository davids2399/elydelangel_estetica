import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './page/products.component';
//Modules
import { SharedModule } from '../../shared/shared.module';

//Services
import {ProductsService } from '@services/products/products.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
