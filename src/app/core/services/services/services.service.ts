import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 //Models
import { Service } from '@models/service/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public getJSON() {
      return this.httpClient.get<Service[]>('./assets/json/services.json');
  }
}
