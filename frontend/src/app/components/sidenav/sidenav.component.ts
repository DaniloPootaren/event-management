import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  chevronIcon = faAngleDown;
  closeIcon = faXmark;
  isCollapsed = false;

  menus: Menu[] = [
    {
      name: 'Home',
      link: '/home',
      subLinks: [{ name: 'Link 1', link: '/link1' }, { name: 'Link 2', link: '/link2' }],
    },
    {
      name: 'Events',
      link: '/events',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
    {
      name: 'Calendar',
      link: '/calendar',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
    {
      name: 'Speakers',
      link: '/calendar',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
    {
      name: 'Venues',
      link: '/venues',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
    {
      name: 'Schedules',
      link: '/schedules',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
    {
      name: 'Pages',
      link: '/pages',
      subLinks: [{ name: 'Link 1', link: '/link1' }],
    },
  ];
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

  onFocusOut(subcontent: any){
    alert('out')
    subcontent.style.display = 'none';
    subcontent.style.height = '0px';
  }
}
