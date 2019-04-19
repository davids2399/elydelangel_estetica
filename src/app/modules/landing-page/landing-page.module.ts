import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 //Shared
import { SharedModule } from '../../shared/shared.module';

 //Landing Page
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './page/landing-page.component';

 //Specials
import { SpecialsComponent } from './components/specials/specials.component';

 //Services
import { HttpClientModule } from '@angular/common/http';
import { SpecialsService } from '../../core/services/specials/specials.service';

@NgModule({
  declarations: [
    LandingPageComponent,
    SpecialsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    SpecialsService
  ],
})
export class LandingPageModule { }
