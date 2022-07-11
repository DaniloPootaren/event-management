import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { WidgetService } from 'src/app/services/widget.service';
import { Category } from 'src/app/types/category';
import { Event } from 'src/app/types/event';

@Component({
  selector: 'view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements OnInit {
  events: Event[] | null = null;

  get categories() {
    return this.widgetService.categories;
  }

  constructor(
    private widgetService: WidgetService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.categoryService.fetchAllEvents().subscribe((res: any) => {
      this.events = res.data;
    });
  }

  handleCategoryClick(category: string) {
    this.categoryService
      .fetchEventByCategory(category)
      .subscribe((res) => console.log(res));
  }
}
