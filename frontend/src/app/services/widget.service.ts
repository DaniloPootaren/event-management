import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  baseUrl: string = environment.baseurl;
  navigator: any = {};

  constructor(private http: HttpClient) {}

  initAppWidgets() {
    this.http
      .get<any>(`${this.baseUrl}/application?populate[navigation][populate]=*`)
      .subscribe((res) => {
        this.navigator = res.data.attributes.navigation['menu_items'].data;
      });
  }
}
