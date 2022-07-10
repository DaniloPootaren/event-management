import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { Event } from 'src/app/types/event';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/types/section';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  todayEvent: Event[] | null = null;
  firstSection: Section | null = null; 
  constructor(
    private homepageService: HomepageService,
    private config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.homepageService.loadContent().subscribe((res) => {
      this.todayEvent = res.data.attributes.today_event.events.data;
      this.firstSection = res.data.attributes.first_section
    });
  }
}
