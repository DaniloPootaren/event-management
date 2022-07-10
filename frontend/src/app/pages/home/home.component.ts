import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { Event } from 'src/app/types/event';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/types/section';
import { Category } from 'src/app/types/category';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit, OnDestroy {
  todayEvent: Event[] | null = null;
  firstSection: Section | null = null;
  categories: Category | null = null;

  constructor(
    private homepageService: HomepageService,
    private config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.homepageService.loadContent().subscribe((res) => {
      this.todayEvent = res.data.attributes.today_event.events.data;
      this.firstSection = res.data.attributes.first_section
    });

  }
}
