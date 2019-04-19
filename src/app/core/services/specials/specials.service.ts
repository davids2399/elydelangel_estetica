import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Models
import { Specials } from '@models/specials/specials';

@Injectable({
  providedIn: 'root'
})
export class SpecialsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public getJSON(){
      return this.httpClient.get<Specials[]>("./assets/json/products.json");
  }


}
