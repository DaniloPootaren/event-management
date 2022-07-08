import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../types/menu';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onCloseEvent = new EventEmitter<any>();
  @Input() navigation: Menu[] | null = null;
  chevronIcon = faAngleDown;
  closeIcon = faXmark;
  isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.onCloseEvent.emit();
  }

  onChevronDown(subcontent: any) {
    if (subcontent.style.display === 'block') {
      subcontent.style.display = 'none';
      subcontent.style.height = '0px';
    } else {
      subcontent.style.display = 'block';
      subcontent.style.minHeight = '100px';
    }
  }

}
