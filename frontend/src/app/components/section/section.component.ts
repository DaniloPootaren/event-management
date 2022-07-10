import { Component, OnInit } from '@angular/core';
import {
  faCalendar
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  icon = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}
