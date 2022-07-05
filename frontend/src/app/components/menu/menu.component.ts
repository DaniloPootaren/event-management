import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {  faCreditCard }from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() alternative: boolean = false;
  chevronIcon = faAngleDown;
  shoppingCartIcon = faCreditCard;

  constructor() { }

  ngOnInit(): void {
  }

}
