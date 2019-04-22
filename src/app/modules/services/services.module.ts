import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceComponent } from './page/service/service.component';

//Modules
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
