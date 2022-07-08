import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HomePage } from '../types/homepage';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  baseUrl: string = environment.baseurl;

  constructor(private http: HttpClient) {}

  loadContent() {
    return this.http.get<HomePage>(`${this.baseUrl}/home?populate=deep`);
  }
}
