import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = environment.baseurl;

  constructor(private http: HttpClient) { }

  fetchEventByCategory(category: string): Observable<any>{
  return this.http.get(`${this.baseUrl}/events?populate=deep&filters[category][name][$eq]=${category}`)
  }

  fetchAllEvents(){
  return this.http.get(`${this.baseUrl}/events?populate=deep`)
  }
}
