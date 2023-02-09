import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Playlists } from 'src/app/interfaces/Playlists';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiKey = 'AIzaSyB2OTUu5NxxAy6mYxVv3TSkMongJq1YjAY';

  private baseApiUrl = 'https://www.googleapis.com/youtube/v3/playlists';

  private channels = [
    { channel: 'descomplica', id: 'UCT0JugAtGmqiYkwxFZOwAtg' },
    { channel: 'brasil escola', id: 'UCsgHWN8lYveMUEWTDheTjZA' },
    { channel: 'stoodi', id: 'UCUDJR8h5P28xaN7UBEPo0VQ' },
  ];

  constructor(private http: HttpClient) {}

  getPlaylistsDescomplica(): Observable<Response<Playlists[]>> {
    const url = `${this.baseApiUrl}?part=snippet&channelId=${this.channels[0].id}&maxResults=50&key=${this.apiKey}`;

    return this.http.get<Response<Playlists[]>>(url);
  }

  getPlaylistsBrasilEscola(): Observable<Response<Playlists[]>> {
    const url = `${this.baseApiUrl}?part=snippet&channelId=${this.channels[1].id}&maxResults=50&key=${this.apiKey}`;

    return this.http.get<Response<Playlists[]>>(url);
  }

  getPlaylistsStoodi(): Observable<Response<Playlists[]>> {
    const url = `${this.baseApiUrl}?part=snippet&channelId=${this.channels[2].id}&maxResults=50&key=${this.apiKey}`;

    return this.http.get<Response<Playlists[]>>(url);
  }
}
