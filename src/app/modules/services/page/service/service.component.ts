import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@services/services/services.service';
import { Service } from '@models/service/service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  services: Service[];

  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.servicesService.getJSON().subscribe(data =>{
      this.services = data;
    })
  }

}
