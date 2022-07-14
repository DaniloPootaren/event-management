import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoadingService } from 'src/app/services/loading.service';
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
    private categoryService: CategoryService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.loadingService.isLoading = true;
    this.categoryService.fetchAllEvents().subscribe((res: any) => {
      this.events = res.data;
      this.loadingService.isLoading = false;
    });
  }

  handleCategoryClick(category: string) {
    this.loadingService.isLoading = true;
    this.categoryService
      .fetchEventByCategory(category)
      .subscribe((res) => {
        this.events = res.data;
        this.loadingService.isLoading = false;
      });
  }
}
