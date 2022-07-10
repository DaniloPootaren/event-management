import { Component, Input, OnInit } from '@angular/core';
import {
  faCalendar,
  faAddressBook,
  faMap,
} from '@fortawesome/free-regular-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'today-event',
  templateUrl: './today-event.component.html',
  styleUrls: ['./today-event.component.scss'],
})
export class TodayEventComponent implements OnInit {
  @Input() todayEvent: Event[] | any = null;
  calendarIcon = faCalendar;
  addressIcon = faAddressBook;
  mapIcon = faMap;

  
  constructor(private config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {}
}
