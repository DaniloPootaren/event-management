import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  baseUrl: string = environment.baseurl;
  navigator: any = {};
  categories: any = null;

  constructor(private http: HttpClient) {}

  initAppWidgets() {
    // TODO: Need to find a way to run request simultenously, see switchmap on stack.
    
    this.http
      .get<any>(`${this.baseUrl}/application?populate=deep`)
      .subscribe((res) => {
        this.navigator = res.data.attributes.navigation['menu_items'].data;
      });

      this.http
      .get<any>(`${this.baseUrl}/categories`)
      .subscribe((res) => {
        this.categories = res.data;
      });
  }
}
