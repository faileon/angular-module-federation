import { Component, OnInit } from '@angular/core';
import {RandomService} from "@ng-mfa/shared/data-access/random";

@Component({
  selector: 'ng-mfa-exposed',
  templateUrl: './exposed.component.html',
  styleUrls: ['./exposed.component.scss'],
})
export class ExposedComponent implements OnInit {

  constructor(public randomService: RandomService) {}

  ngOnInit(): void {}
}
