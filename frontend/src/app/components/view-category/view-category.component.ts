import { Component, Input, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
  
  get categories(){
    return this.widgetService.categories
  }

  constructor(  private widgetService: WidgetService) { }

  ngOnInit(): void {
  }

  handleCategoryClick(category: string){
    console.log(category)
  }

}
