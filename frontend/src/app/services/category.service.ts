import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = environment.baseurl;

  constructor(private http: HttpClient) { }

  fetchEventByCategory(category: string){
  return this.http.get(`${this.baseUrl}/events?filters[category][name][$eq]=${category}`)
  }
}
