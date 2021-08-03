import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar, ICar2, IPost, ITheme } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }

  loadContent() {
    return this.http.get<ICar2[]>(`${API_URL}/cars`);
  }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  createCar(data: any) {
    return this.http.post<ICar>(`${API_URL}/cars/create`, data, { withCredentials: true });
  }
}
