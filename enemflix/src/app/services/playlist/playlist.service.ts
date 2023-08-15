import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Categories } from 'src/app/interfaces/Categories';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiKey = 'AIzaSyDsCWX8NQYQJffzgkI3ljDIz9WYKYWH-VE';

  private baseApiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  getVideosRedacao(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=redação ENEM&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }

  getVideosCienciasDaNatureza(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=ciencias da natureza ENEM&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }

  getVideosCienciasHumanas(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=ciencias humanas ENEM&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }
}
