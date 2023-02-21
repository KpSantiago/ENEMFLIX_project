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

  private channels = [
    { channel: 'descomplica', id: 'UCT0JugAtGmqiYkwxFZOwAtg' },
    { channel: 'brasil escola', id: 'UCsgHWN8lYveMUEWTDheTjZA' },
    { channel: 'stoodi', id: 'UCUDJR8h5P28xaN7UBEPo0VQ' },
  ];

  constructor(private http: HttpClient) {}

  getVideosDescomplica(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=Vestibular ENEM&channelId=${this.channels[0].id}&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }

  getVideosBrasilEscola(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=Vestibular ENEM&channelId=${this.channels[1].id}&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }

  getVideosStoodi(): Observable<Response<Categories[]>> {
    const url = `${this.baseApiUrl}?part=snippet&q=Vestibular ENEM&channelId=${this.channels[2].id}&maxResults=20&key=${this.apiKey}`;

    return this.http.get<Response<Categories[]>>(url);
  }
}
