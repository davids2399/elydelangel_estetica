import { Component, OnInit , Input} from '@angular/core';
import { Specials } from '@models/specials/specials.ts';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.sass']
})

export class SpecialsComponent implements OnInit {
  private _special: Specials;

  @Input()
  set special(special: Specials) {
    this._special = special;
  }

  get special(): Specials { return this._special; }

  constructor(){}

  ngOnInit() {
  }

}
