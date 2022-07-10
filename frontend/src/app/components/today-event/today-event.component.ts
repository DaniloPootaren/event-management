import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'today-event',
  templateUrl: './today-event.component.html',
  styleUrls: ['./today-event.component.scss']
})
export class TodayEventComponent implements OnInit {

  @Input() todayEvent: Event[] | any = null;
  constructor(
    private config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
