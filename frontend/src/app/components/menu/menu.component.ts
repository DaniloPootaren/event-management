import { Component, Inject, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() alternative: boolean = false;
  @Input() main: any = null;
  chevronIcon = faAngleDown;
  shoppingCartIcon = faCreditCard;

  constructor() {}

  ngOnInit(): void {
  }

  openNav(sideNav: any, overlay:any) {
    sideNav.style.width = '375px';
    overlay.style.display = 'block';
    this.main.style.backgroundColor = 'black';
  }

  closeNav(sideNav: any, overlay:any) {
    sideNav.style.width = '0';
    this.main.style.marginLeft = '0';
    overlay.style.display = 'none';
  }
}
