import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Categories } from 'src/app/interfaces/Categories';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiKey = 'AIzaSyDsCWX8NQYQJffzgkI3ljDIz9WYKYWH-VE';
  private baseApiUrl = 'https://www.googleapis.com/youtube/v3/search';

  private queries = `part=snippet&maxResults=300&key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getVideosCategories(query: string): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?${this.queries}&q=${query} Provas e ENEM`;

    return this.http.get<Response<Categories[]>>(url);
  }
}
