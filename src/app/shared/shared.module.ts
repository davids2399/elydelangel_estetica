import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {SharedRoutingModule} from './shared-routing.module';

//MDBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MDBBootstrapModule
  ]
})
export class SharedModule { }
