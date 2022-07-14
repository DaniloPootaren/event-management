import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/types/event';
import { environment } from 'src/environments/environment';
import {
  faCalendar,
  faAddressBook,
  faMap,
} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  baseUrl: string = environment.baseurl.replace('/api','')
  calendarIcon = faCalendar;
  addressIcon = faAddressBook;
  mapIcon = faMap;

  @Input() event: Event | null = null;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
