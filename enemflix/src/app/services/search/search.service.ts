import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Categories } from 'src/app/interfaces/Categories';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiKey = 'AIzaSyDsCWX8NQYQJffzgkI3ljDIz9WYKYWH-VE';
  private baseApiUrl = 'https://www.googleapis.com/youtube/v3/search';

  private queries = `part=snippet,id&maxResults=50&key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getSearchVideos(query: string): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?${this.queries}&q=${query} ENEM e vestibular`;
    return this.http.get<Response<Categories[]>>(url);
  }
}
