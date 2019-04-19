import { Component, OnInit } from '@angular/core';

 //Services
import { SpecialsService } from '@services/specials/specials.service';

 //Models
import { Specials } from '@models/specials/specials';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  specials: Specials[];

  constructor(
    private specialsService: SpecialsService
  ){ 
    this.specials = [];
  }

  ngOnInit() {

    this.specialsService.getJSON().subscribe(data => {
        console.log(data);
        this.specials = data;
    });
  }

}
